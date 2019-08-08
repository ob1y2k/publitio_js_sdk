import PublitioAPI from 'publitio_js_sdk'
import { readFileSync } from 'fs'

const publitio = new PublitioAPI('<API key>', '<API secret>')

// This could also be a ReadableStream in Node, a File in the browser or a string
const file = readFileSync('image.png')

publitio.uploadFile(file, 'watermark', {
  name: '<watermark name>',
  position: 'bottom-right',
  padding: '20'
}).then(data => { console.log(data) })
  .catch(error => { console.log(error) })
