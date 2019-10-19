export function publitioApi(key: string, secret: string): PublitioAPI

type createActions = 'file'|'watermark'

/**
 * Primary class for communicating with the Publitio API.
 */
export default class PublitioAPI {
  /**
   * @param key The public API key, found in the Publitio dashboard.
   * @param secret The secret API key, found in the Publitio dashboard.
   */
  constructor(key: string, secret: string)

  /**
   * @returns API version.
   */
  version(): string

  /**
   * Makes an API call.
   * 
   * This method is used when no file needs to be uploaded to the server.
   * If a file needs to be uploaded to the server, use `uploadFile`.
   * 
   * @param path The call path. For example, '/files/list' to list all files.
   * @param method The HTTP method to use.
   * @param options Call-specific options. These get encoded into the URL as query parameters.
   * @returns A promise that resolves to parsed response JSON.
   */
  call(path: string, method?: string, options?: Object): Promise<any>

  /**
   * Makes an API call, uploading the given file to the server.
   * 
   * This method is used when the API call requires a file to be uploaded, such as when
   * creating a new file or watermark. If you don't need to upload a file to the server,
   * use `call`.
   * 
   * @param file The file to upload. Can be either Buffer or ReadableStream for Node, Blob (including subclasses like file) in the browser, or string.
   * @param kind The kind of file being uploaded, can be either 'file' or 'watermark'.
   * @param options Call-specific options. These get encoded into the URL as query parameters.
   * @returns A promise that resolves to parsed response JSON.
   */
  uploadFile(file: Buffer|ReadableStream|string|Blob, kind:'file'|'watermark', options?: Object): Promise<any>

  /**
   * Uploads a file to the server from a remote address.
   * 
   * @param options Call-specific options. These get encoded into the URL as query parameters.
   * @returns A promise that resolves to parsed response JSON.
   */
  uploadRemoteFile(options?: any): Promise<any>
}

/**
 * @deprecated
 * @param key The public API key, found in the Publitio dashboard.
 * @param secret The secret API key, found in the Publitio dashboard.
 */
export function publitioApi(key: string, secret: string): PublitioAPI
