import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('API key', 'API secret')

publitio.call('/files/versions/create/file ID', 'POST', {
  extension: 'mp4',
  options: 'w_320,h_240'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
