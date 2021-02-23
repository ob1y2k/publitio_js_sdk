requirejs(['../build/publitio-api.min.js'], PublitioAPI => {
  const publitio = new PublitioAPI('yourApiKey', 'yourApiSecret')
  publitio.call('/files/list', 'GET', { offset: '0', limit: '10' })
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })
})
