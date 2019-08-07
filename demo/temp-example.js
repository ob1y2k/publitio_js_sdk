const { publitioApi } = require('../build/publitio-api')

// file ---> Some JS file

const publitio = publitioApi('ktuZkDrpfA3M7t3txAp0', 'RWnZpAdRa8olrNaDjsZp1Q5VbWgznwy8')
const fs = require('fs')

/*
const filename = 'index.html'
const f1 = fs.readFileSync(filename)
let f2 = Buffer.from([])
const stream = fs.createReadStream(filename)
stream.on('data', chunk => f2 = Buffer.concat([f2, chunk]))
stream.on('error', err => console.log(err))
stream.on('end', () => {
  console.log(f1.length)
  console.log(f2.length)
  console.log(f1.length === f2.length)
})
*/

/*_________________________*/
/* File Class             */


// list files
//publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
  //.then((data) => { printResponse(data) })
  //.catch((error) => { console.log(error) })

publitio.uploadFile(fs.createReadStream('/home/blind-fuck/ya.png')).then(r => console.log(r))

// // create (upload) local file, simple
// publitio.uploadFile(file, 'file')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// //create (upload) remote file
// publitio.uploadRemoteFile('file', {
//   file_url: 'https://publit.io/images/publitio_logo_white_pure_s.png'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) }) 

// // create (upload) local file, all options
// publitio.uploadFile(file, 'file', {
//   title: 'zzz',
//   description: 'yyyyyy',
//   tags: 'tag1 tag2',
//   privacy: '1',
//   option_download: '1',
//   option_ad: '1'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // show file with id 0M08pwHk
// publitio.call('/files/show/0M08pwHk', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // update file with id 0M08pwHk
// publitio.call('/files/update/0M08pwHk', 'PUT', {
//   title: 'xxxx',
//   description: 'wwww',
//   tags: 'tag1 tag2',
//   privacy: '1',
//   option_download: '1',
//   option_ad: '1'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) }) 

// // delete file with id 0M08pwHk
// publitio.call('/files/delete/0M08pwHk', 'DELETE')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // get player for file with id 0M08pwHk
// publitio.call('/files/player/0M08pwHk', 'GET', {
//   player: 'id',
//   adtag: 'id'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

  
// /*_________________________*/
// /* Player Class             */


// // list players
// publitio.call('/players/list', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // create player
// publitio.call('/players/create', 'POST', {
//   name: 'player',
//   adtag_id: 'myover', // adtag must already exist
//   skin: 'blue'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // show player with id myplayer
// publitio.call('/players/show/myplayer', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // update player with id myplayer
// publitio.call('/players/update/myplayer', 'PUT', {
//   adtag_id: 'mypreroll',
//   auto_play: '1',
//   skin: ''
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // delete player with id myplayer
// publitio.call('/players/delete/myplayer', 'DELETE')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })


// /*_______________________________*/
// /* Advertising (Ad Tags) Class   */


// // list adtags
// publitio.call('/players/adtags/list', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // create adtag
//  publitio.call('/players/adtags/create', 'POST', {
//   name: 'myover',
//   tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // show adtag with id mytestad
// publitio.call('/players/adtags/show/mytestad', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // update adtag with id mytestad
// publitio.call('/players/adtags/update/mytestad', 'PUT', {
//   tag: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator='
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) }) 

// // delete adtag with id mytestad
// publitio.call('/players/adtags/delete/mytestad', 'DELETE')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })


// /*_________________________*/
// /* File Versions Class   */


// // list versions for file with id 0M08pwHk
// publitio.call('/files/versions/list/0M08pwHk', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // create new version from file with id 0M08pwHk, with options width=320, height=240, crop=fill
// publitio.call('/files/versions/create/0M08pwHk', 'POST', {
//   extension: 'mp4',
//   options: 'w_320,h_240'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) }) 

// // show file version with id 69D3lwtm
// publitio.call('/files/versions/show/69D3lwtm', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // update file version with id 69D3lwtm
// publitio.call('/files/versions/update/69D3lwtm', 'PUT', {})
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // delete file version with id 69D3lwtm
// publitio.call('/files/versions/delete/69D3lwtm', 'DELETE')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })


// /*_____________________*/
// /* Watermarks Class   */


// // list watermarks
// publitio.call('/watermarks/list', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // create (upload) watermark from local file
// pubitio.uploadFile(file, 'watermark', {
//   name: 'mytestwm',
//   position: 'bottom-right',
//   padding: '20'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // show watermark with id mytestwm
// publitio.call('/watermarks/show/mytestwm', 'GET')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // update watermark with id mytestwm
// publitio.call('/watermarks/update/mytestwm', 'PUT', {
//   position: 'top-right',
//   padding: '10'
// }).then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })

// // delete watermark with id mytestwm
// publitio.call('/watermarks/delete/mytestwm', 'DELETE')
//   .then((data) => { printResponse(data) })
//   .catch((error) => { console.log(error) })


// /*_________________________*/

function printResponse(response) {
  if (!response.success) {
    let errorMessage = response.error.message
    console.log(`${errorMessage}`)
  } else {
    console.log('All good... Do your stuff here (get id, html, etc. from the response)')
    console.log(response)
  }
}

// ?>
