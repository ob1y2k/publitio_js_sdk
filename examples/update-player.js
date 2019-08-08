import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('API key', 'API secret')

publitio.call('/players/update/player ID', 'PUT', {
  adtag_id: 'mypreroll',
  auto_play: '1',
  skin: ''
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
