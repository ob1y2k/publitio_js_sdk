import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.uploadRemoteFile({
  file_url: 'https://publit.io/images/publitio_logo_white_pure_s.png'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
