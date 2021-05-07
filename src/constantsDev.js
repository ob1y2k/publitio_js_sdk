

var API_URL = 'https://api.publit.io/v1'
if( window.LOCAL_DEV == true )
	var API_URL ='https://test.publit.io/v1'

export const API = {
  VERSION: '1.1.5',
  URL: API_URL
}

export const ACTIONS = {
  FILE: 'file',
  WATERMARK: 'watermark'
}

export const MIN = 0
export const MAX = 99999999
