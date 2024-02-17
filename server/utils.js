const minimist = require("minimist");
const urlparse = require("url-parse");

/**
 * Deserialize and return the unpacked message.
 *
 * #### Notes
 * Handles JSON blob strings and binary messages.
 */
function deserialize(data) {
  let value;
  if (typeof data === "string") {
    value = JSON.parse(data);
  } else {
    value = deserializeBinary(data);
  }
  return value;
}

/**
 * Serialize a kernel message for transport.
 *
 * #### Notes
 * If there is binary content, an `ArrayBuffer` is returned,
 * otherwise the message is converted to a JSON string.
 */
function serialize(msg) {
  let value;
  if (msg.buffers && msg.buffers.length) {
    value = serializeBinary(msg);
  } else {
    value = JSON.stringify(msg);
  }
  return value;
}

/**
 * Deserialize a binary message to a Kernel Message.
 */
function deserializeBinary(buf) {
  let data = new DataView(buf);
  // read the header: 1 + nbufs 32b integers
  let nbufs = data.getUint32(0);
  let offsets = [];
  if (nbufs < 2) {
    throw new Error("Invalid incoming Kernel Message");
  }
  for (let i = 1; i <= nbufs; i++) {
    offsets.push(data.getUint32(i * 4));
  }
  let jsonBytes = new Uint8Array(buf.slice(offsets[0], offsets[1]));
  let msg = JSON.parse(new TextDecoder("utf8").decode(jsonBytes));
  // the remaining chunks are stored as DataViews in msg.buffers
  msg.buffers = [];
  for (let i = 1; i < nbufs; i++) {
    let start = offsets[i];
    let stop = offsets[i + 1] || buf.byteLength;
    msg.buffers.push(new DataView(buf.slice(start, stop)));
  }
  return msg;
}

/**
 * Implement the binary serialization protocol.
 *
 * Serialize Kernel message to ArrayBuffer.
 */
function serializeBinary(msg) {
  let offsets = [];
  let buffers = [];
  let encoder = new TextEncoder("utf8");
  let jsonUtf8 = encoder.encode(JSON.stringify(msg, replaceBuffers));
  buffers.push(jsonUtf8.buffer);
  for (let i = 0; i < msg.buffers.length; i++) {
    // msg.buffers elements could be either views or ArrayBuffers
    // buffers elements are ArrayBuffers
    let b = msg.buffers[i];
    buffers.push(b instanceof ArrayBuffer ? b : b.buffer);
  }
  let nbufs = buffers.length;
  offsets.push(4 * (nbufs + 1));
  for (let i = 0; i + 1 < buffers.length; i++) {
    offsets.push(offsets[offsets.length - 1] + buffers[i].byteLength);
  }
  let msgBuf = new Uint8Array(offsets[offsets.length - 1] + buffers[buffers.length - 1].byteLength);
  // use DataView.setUint32 for network byte-order
  let view = new DataView(msgBuf.buffer);
  // write nbufs to first 4 bytes
  view.setUint32(0, nbufs);
  // write offsets to next 4 * nbufs bytes
  for (let i = 0; i < offsets.length; i++) {
    view.setUint32(4 * (i + 1), offsets[i]);
  }
  // write all the buffers at their respective offsets
  for (let i = 0; i < buffers.length; i++) {
    msgBuf.set(new Uint8Array(buffers[i]), offsets[i]);
  }
  return msgBuf.buffer;
}

/**
 * Filter `"buffers"` key for `JSON.stringify`.
 */
function replaceBuffers(key, value) {
  if (key === "buffers") {
    return undefined;
  }
  return value;
}

// Copy the contents of one object to another, recursively.
// From [stackoverflow](http://stackoverflow.com/a/12317051).
function extend(target, source) {
  target = target || {};
  for (let prop in source) {
    if (typeof source[prop] === "object") {
      target[prop] = extend(target[prop], source[prop]);
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

// Get a deep copy of a JSON object.
function copy(object) {
  return JSON.parse(JSON.stringify(object));
}

// Get a random 32 character hex string (not a formal UUID)
function uuid() {
  let s = [];
  let hexDigits = "0123456789abcdef";
  let nChars = hexDigits.length;
  for (let i = 0; i < 32; i++) {
    s[i] = hexDigits.charAt(Math.floor(Math.random() * nChars));
  }
  return s.join("");
}

// Parse a url into a URL object.
function urlParse(url) {
  if (typeof document !== "undefined") {
    let a = document.createElement("a");
    a.href = url;
    return a;
  }
  return urlparse(url);
}

function urlPathJoin(...parts) {
  // Adapted from url-join.
  // Copyright (c) 2016 José F. Romaniello, MIT License.
  // https://github.com/jfromaniello/url-join/blob/v1.1.0/lib/url-join.js
  let str = [].slice.call(parts, 0).join("/");

  // make sure protocol is followed by two slashes
  str = str.replace(/:\//g, "://");

  // remove consecutive slashes
  str = str.replace(/([^:\s])\/+/g, "$1/");

  // remove trailing slash before parameters or hash
  str = str.replace(/\/(\?|&|#[^!])/g, "$1");

  // replace ? in parameters with &
  str = str.replace(/(\?.+)\?/g, "$1&");

  return str;
}

function urlEncodeParts(uri) {
  return urlPathJoin(...uri.split("/").map(encodeURIComponent));
}

function jsonToQueryString(json) {
  return (
    "?" +
    Object.keys(json)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(String(json[key])))
      .join("&")
  );
}

function _getCookie(name) {
  // from tornado docs: http://www.tornadoweb.org/en/stable/guide/security.html
  var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
  return r ? r[1] : void 0;
}

function ajaxRequest(url, ajaxSettings) {
  let method = ajaxSettings.method || "GET";

  // Ensure that requests have applied data.
  if (!ajaxSettings.data) {
    ajaxSettings.data = "{}";
    ajaxSettings.contentType = "application/json";
  }

  let user = ajaxSettings.user || "";
  let password = ajaxSettings.password || "";
  let headers = ajaxSettings.requestHeaders || {};

  if (!ajaxSettings.cache) {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache.
    url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
  }

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true, user, password);

    if (ajaxSettings.contentType !== void 0) {
      xhr.setRequestHeader("Content-Type", ajaxSettings.contentType);
    }
    if (ajaxSettings.timeout !== void 0) {
      xhr.timeout = ajaxSettings.timeout;
    }
    if (!!ajaxSettings.withCredentials) {
      xhr.withCredentials = true;
    }

    // Try to add the xsrf token if there is no existing authorization.
    let token = headers["Authorization"];
    if (!token && typeof document !== "undefined" && document.cookie) {
      let xsrfToken = _getCookie("_xsrf");
      if (xsrfToken !== void 0) {
        xhr.setRequestHeader("X-XSRFToken", xsrfToken);
      }
    }

    for (let prop in headers) {
      xhr.setRequestHeader(prop, headers[prop]);
    }

    xhr.onload = (event) => {
      if (xhr.status >= 300) {
        reject({ event, xhr, ajaxSettings, throwError: xhr.statusText });
      }
      let data = xhr.responseText;
      try {
        data = JSON.parse(data);
      } catch (err) {
        // no-op
      }
      resolve({ xhr, ajaxSettings, data, event });
    };

    xhr.onabort = (event) => {
      reject({ xhr, event, ajaxSettings });
    };

    xhr.onerror = (event) => {
      reject({ xhr, event, ajaxSettings });
    };

    xhr.ontimeout = (ev) => {
      reject({ xhr, event, ajaxSettings });
    };

    if (ajaxSettings.data) {
      xhr.send(ajaxSettings.data);
    } else {
      xhr.send();
    }
  });
}

function makeAjaxError(success, throwError) {
  let xhr = success.xhr;
  let ajaxSettings = success.ajaxSettings;
  let event = success.event;
  throwError = throwError || `Invalid Status: ${xhr.status}`;
  return { xhr, ajaxSettings, event, throwError };
}

function loadObject(name, moduleName, registry) {
  return new Promise((resolve, reject) => {
    // Try loading the view module using require.js
    if (moduleName) {
      if (typeof requirejs === "undefined") {
        throw new Error("requirejs not found");
      }
      requirejs(
        [moduleName],
        (mod) => {
          if (mod[name] === void 0) {
            let msg = `Object '${name}' not found in module '${moduleName}'`;
            reject(new Error(msg));
          } else {
            resolve(mod[name]);
          }
        },
        reject
      );
    } else {
      if (registry && registry[name]) {
        resolve(registry[name]);
      } else {
        reject(new Error(`Object '${name}' not found in registry`));
      }
    }
  });
}

function getConfigOption(name) {
  if (configData) {
    return configData[name];
  }
  if (typeof document === "undefined") {
    configData = minimist(process.argv.slice(2));
  } else {
    let el = document.getElementById("jupyter-config-data");
    if (el) {
      configData = JSON.parse(el.textContent);
    } else {
      configData = {};
    }
  }
  configData = deepFreeze(configData);
  return configData[name];
}

/**
 *  Make an object fully immutable by freezing each object in it.
 */
function deepFreeze(obj) {
  // Freeze properties before freezing self
  Object.getOwnPropertyNames(obj).forEach(function (name) {
    let prop = obj[name];

    // Freeze prop if it is an object
    if (typeof prop === "object" && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Freeze self
  return Object.freeze(obj);
}

function getBaseUrl() {
  let baseUrl = getConfigOption("baseUrl");
  if (!baseUrl || baseUrl === "/") {
    baseUrl = typeof location === "undefined" ? "http://localhost:8888/" : location.origin + "/";
  }
  return baseUrl;
}

function getWsUrl(baseUrl) {
  let wsUrl = getConfigOption("wsUrl");
  if (!wsUrl) {
    baseUrl = baseUrl || getBaseUrl();
    if (baseUrl.indexOf("http") !== 0) {
      if (typeof location !== "undefined") {
        baseUrl = path.join(location.origin, baseUrl);
      } else {
        baseUrl = path.join("http://localhost:8888/", baseUrl);
      }
    }
    wsUrl = "ws" + baseUrl.slice(4);
  }
  return wsUrl;
}

function ajaxSettingsWithToken(ajaxSettings, token) {
  if (!ajaxSettings) {
    ajaxSettings = {};
  } else {
    ajaxSettings = copy(ajaxSettings);
  }
  if (!token) {
    token = getConfigOption("token");
  }
  if (!token || token === "") {
    return ajaxSettings;
  }
  if (!ajaxSettings.requestHeaders) {
    ajaxSettings.requestHeaders = {};
  }
  ajaxSettings.requestHeaders["Authorization"] = `token ${token}`;
  return ajaxSettings;
}

/**
 * Global config data for the Jupyter application.
 */
let configData = null;

module.exports = {
  deserialize,
  serialize,
  deserializeBinary,
  serializeBinary,
  replaceBuffers,
  extend,
  copy,
  uuid,
  urlParse,
  urlPathJoin,
  urlEncodeParts,
  jsonToQueryString,
  ajaxRequest,
  makeAjaxError,
  loadObject,
  getConfigOption,
  deepFreeze,
  getBaseUrl,
  getWsUrl,
  ajaxSettingsWithToken,
};
