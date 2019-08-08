
# Publitio JS SDK

JavaScript SDK for the [Publitio API](https://publit.io).

## Installation

### Using npm:

```shell

$ npm install publitio_js_sdk --save

```

### Using yarn:

```shell

$ yarn add publitio_js_sdk

```

## Usage

This library runs both in Node and in the browser.
When using the library in the browser, note that it is
in [UMD](https://github.com/umdjs/umd) format.
This means you can load it either as a simple
`<script>` tag, or using RequireJS. Unless you are
using webpack or a similar tool, you should always load
`publitio-api.min.js` in the browser.

### Using require in Node:

```javascript
const PublitioAPI = require('publitio_js_sdk').default
const publitio = new PublitioAPI('API key', 'API secret')
```

### Using RequireJS in the browser:
```javascript
requirejs(
  ['node_modules/publitio_js_sdk/build/publitio-api.min.js'],
  PublitioAPI => { /*...*/ }
)
```

### Using `<script>` tags:
```html
<script src="node_modules/publitio_js_sdk/build/publitio-api.min.js"></script>
```

### Using ES6 modules:

```javascript
import PublitioAPI from 'publitio_js_sdk'
const publitio = new PublitioAPI('API key', 'API secret')
```

Sample API call to list files: 

```javascript
publitio.call('/files/list', 'GET', { offset: '0', limit: '10'})
        .then(response => { console.log(response) })
        .catch(error => { console.log(error) })
```

See the [examples directory](./examples) for useful examples
and check the [official Publitio docs](https://publit.io/docs/).

For legacy reasons, the following is also allowed:

```javascript
import { publitioApi } from 'publitio_js_sdk'
const publitio = publitioApi('API key', 'API secret')
```

The `publitioApi` function is deprecated and should be avoided.
