const { publitioApi } = require('../build/publitio-api')
const fs = require('fs')

const file = fs.readFileSync('/path/to/song.mp3')
const publitio = publitioApi('yourApiKey', 'yourApiSecret')
publitio.call('/files/update/G5DeRBJX', 'PUT', { description: 'my left tit' })
  .then(r => console.log(r))
  .catch(e => console.log(e))
