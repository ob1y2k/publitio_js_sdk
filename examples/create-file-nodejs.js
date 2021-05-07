//try something like this...
const PublitioAPI = require('publitio_js_sdk').default
const publitio = new PublitioAPI('apikey', 'secretkey')
const fs = require('fs')

// This could also be a ReadableStream in Node, a File in the browser or a string
const file = fs.readFileSync('image.png') // same path as app/script dir

publitio.uploadFile(file, 'file')
.then(data => { console.log(data) })
.catch(error => { console.log(error) })