export default class BadResponseJSON extends Error {
    constructor(res, url) {
        super(
            `Received invalid response JSON for URL '${url}':\n${res}\n` +
            'This may be due to an internal server error, or the URL is invalid.'
        )
    }
}