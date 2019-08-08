import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('API key', 'API secret')

publitio.call('/files/player/0M08pwHk', 'GET', {
  player: 'id',
  adtag: 'id'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
