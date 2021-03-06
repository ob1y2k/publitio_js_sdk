import axios from 'axios'
import { runningInNode } from './helper'

class InvalidJSONError extends Error {
  constructor(responseData) {
    super("The server was expected to respond with JSON, but didn't. This might be because you used " +
          "an invalid endpoint URL, an invalid HTTP method, or due to an internal server error. Response:\n" +
          responseData)
  }
}

class FetchService {
  callApi (url, method) {
    return axios({
      method,
      url,
      validateStatus: () => true,
    })
    .then(res => {
      if (typeof res.data === 'string')
        throw new InvalidJSONError(res.data)
      return res.data
    })
  }

  uploadFile (formData, url) {
    let req

    if (runningInNode) {
      req = axios.post(url, formData.getBuffer(), {
        headers: formData.getHeaders(),
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        validateStatus: () => true,
      })
    } else {
      req = axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        maxDataSize: Infinity,
        validateStatus: () => true,
      })
    }

    return req.then(res => {
      if (typeof res.data === 'string')
        throw new InvalidJSONError(res.data)
      return res.data
    })
  }
}

export const fetchService = new FetchService()
