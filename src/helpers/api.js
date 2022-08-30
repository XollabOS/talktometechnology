/**
 * Send a GET request to a JSON REST API and get the JSON data from the server's response.
 *
 * @param {string} url The url to send a GET request to.
 * @returns {Promise<object>} Promise to an object parsed from the server's JSON response.
 */
export async function getJSON(url) {
    return await (await fetch(url)).json();
}