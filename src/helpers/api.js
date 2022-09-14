/**
 * Send a GET request to a JSON REST API and get the JSON data from the server's response.
 *
 * @param {string} url The url to send a GET request to.
 * @returns {Promise<object>} Promise to an object parsed from the server's JSON response.
 */
export async function getJSON(url) {
    return await (await fetch(url)).json();
}

/**
 * Send an HTTP request with an object converted to JSON to a REST API and get the JSON data from the server's response.
 *
 * @param {string} url The url to send a request to.
 * @param {*} data The object or data to be sent to the server.
 * @param {object} init Consult the {@link fetch} method.
 * Default set to POST, and has the Content-Type headers by default.
 * @returns {Promise<object>} Promise to an object parsed from the server's JSON response.
 */
export async function sendJSON(url, data, init={}) {
    init.method ??= "POST";
    init.body = JSON.stringify(data);
    init.headers ??= {};
    const contentTypeHeader = {
        "Content-Type": "application/json",
    };
    Object.assign(init.headers, contentTypeHeader);
    return await (await fetch(url, init)).json();
}