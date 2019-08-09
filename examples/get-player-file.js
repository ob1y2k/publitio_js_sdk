import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/files/player/<file ID>', 'GET', {
  player: '<player ID>',
  adtag: '<adtag ID>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
