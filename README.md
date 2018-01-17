
# Publitio JavaScript SDK

---
### Description

Simple JavaScript SDK for **Publitio API**.

---

### Installation

##### Using npm:

```shell

$ npm install publitio_javascript_sdk --save

```

##### Using yarn:

```shell

$ yarn add publitio_javascript_sdk

```

---
### Usage

##### Using require:

```javascript

const { publitioApi } = require('publitio_javascript_sdk')

```

##### ES6: 

```javascript

import { publitioApi } from 'publitio_javascript_sdk'

```

```javascript

// xxxx => Your API_KEY
// yyyy => Your API_SECRET
window.publitio = publitioApi('xxxx', 'yyyy')

```

Sample api call to list files: 

```javascript

// list files
publitio.call('/files/list', 'GET', { offset: '0', limit: '10'})
	.then((response) => { console.log(response) })
	.catch((error) => { console.log(error) })

```

See **`examples.js`** file for full list of available classes, methods and options, or check the official docs on *www.publit.io.*

---
