import PublitioAPI from 'publitio_js_sdk'

const publitio = new PublitioAPI('<API key>', '<API secret>')

publitio.call('/players/update/<player ID>', 'PUT', {
  adtag_id: '<adtag ID>',
  auto_play: '<0 - no autoplay, 1 - autoplay, 2 - autoplay on mouseover>'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
