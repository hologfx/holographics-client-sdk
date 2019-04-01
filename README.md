<img src="holographics_logo.png" align="right" width="100px" />

# Welcome to Holographics
> Holographics is the fastest and easiest way to add live graphics to your videos. Easily overlay lower-thirds, broadcast messages, ticker tapes and your own custom widgets on any live video feed. Or output Key & Fill signals using a supported application.

[https://hologfx.io/](https://hologfx.io)

_For examples and usage, please refer to the [Documentation][wiki]._

## This is the Holographics SDK

This simple library can be used to connect to Holographics and execute functions against its API, either through REST methods or via Websockets. Websockets offer the additional advantage of receiving events from the server as well.

Information on how to use this API can be found in our API docs:
[https://holographics.restlet.io](https://holographics.restlet.io)

You can find all available routes and methods in [EXAMPLES.md](EXAMPLES.md).

## Prerequisites

Note that this SDK works only with Holographics versions 1.2.0 and up.

```
Node, Yarn or NPM installed
```

## Installation

```sh
yarn
or
npm install
```

## Useage example

```node
const sdk = require('holographics-client-sdk')

// Choose to go with the REST or Socket API.
// Best option is Socket if you have the choice.

//let Holographics   = new sdk.REST('http://localhost:3000')
let Holographics = new sdk.Socket('http://localhost:3000')

// From here the API's are identical
// The general pattern is API.service.method().

Holographics.state.get().then((response) => {
  console.log(response)
})

// You can access the socket as well:
Holographics.socket.on('stateChanged', (state) => {
  console.log(state)
})

// Get the list of events you can receive this way in EXAMPLES.md

// You need to pass in an ID for some requests:
Holographics.widgets.get({
  id: 'widgetidgoeshere'
}).then((widget) => {
  // do something with widget
})

// And in some cases you need both an ID and data:
Holographics.entries.patch({
  id: 'entryidgoeshere',
  data: {
    visibility: false
  }
})
```

## Meta

Floris Porro – [@florisporro](https://twitter.com/florisporro) – floris@hologfx.io

<!-- Markdown link & img dfn's -->
[wiki]: https://docs.hologfx.io/
