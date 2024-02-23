import { PageConfig, URLExt} from '@jupyterlab/coreutils';
import { ServerConnection } from '@jupyterlab/services';


export async function requestAPI<T>(
    endPoint = "",
    init: RequestInit = {}
    ): Promise<T> {
        const baseUrl = 'http://localhost:8888';
        const settings = ServerConnection.makeSettings(
            {
                baseUrl : baseUrl
            }
        );
    
        const requestURL = URLExt.join(
        settings.baseUrl,
        "jupyterlab_svelte",
        endPoint
        );

        let response: Response;
        try {
            response = await ServerConnection.makeRequest(requestURL, init, settings);
        } catch (error) {
            throw new ServerConnection.NetworkError(error as any);
    }

    let data : any = await response.json();

    if (data.length > 0) {
        try {
            data = JSON.parse(data);
        } catch (error) {
           console.log("Error parsing JSON data", response);
        }
    }

    if (!response.ok) {
        throw new ServerConnection.ResponseError(response, data.message  || data);
    }
    return data;
}
