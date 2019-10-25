const { publitioApi } = require('../build/publitio-api')
const fs = require('fs')

const file = fs.readFileSync('/home/mogwai/music.bak/Music/car seat headrest - nervous young man (2013)/01 boxing day.mp3')
const publitio = publitioApi('NsSyzZGG4NDkGbbkc44g', '6BWw4SalTm6qDnl6mH7gv54RtT9hpVuT')
publitio.call('/files/update/G5DeRBJX', 'PUT', { description: 'my left tit' })
  .then(r => console.log(r))
  .catch(e => console.log(e))
