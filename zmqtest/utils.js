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

function uuid() {
  let s = [];
  let hexDigits = "0123456789abcdef";
  let nChars = hexDigits.length;
  for (let i = 0; i < 32; i++) {
    s[i] = hexDigits.charAt(Math.floor(Math.random() * nChars));
  }
  return s.join("");
}

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

module.exports = {
  deserialize,
  serialize,
  uuid,
  extend,
};
