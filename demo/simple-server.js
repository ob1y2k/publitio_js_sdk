const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  if (req.url === '/publitio-api.min.js') {
    serveJS(res, './build/publitio-api.min.js')
  } else if (req.url.endsWith('.js')) {
    serveJS(res, path.join('demo', req.url.slice(1)))
  } else if (req.url.endsWith('.map')) {
    serveText(res, path.join('build', req.url.slice(1)))
  } else if (req.url.endsWith('.html')) {
    serveHTML(res, path.join('demo', req.url.slice(1)))
  } else {
    serveHTML(res, path.join('demo', 'index-script-tags.html'))
  }

  res.end()
}).listen(1234)

function serveJS (res, file) {
  console.log(`JS ${file}`)
  res.setHeader('Content-Type', 'application/javascript')
  res.write(fs.readFileSync(file))
}

function serveHTML (res, file) {
  console.log(`HTML ${file}`)
  res.setHeader('Content-Type', 'text/html')
  res.write(fs.readFileSync(file))
}

function serveText (res, file) {
  console.log(`text ${file}`)
  res.setHeader('Content-Type', 'text/plain')
  res.write(fs.readFileSync(file))
}
