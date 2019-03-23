<img src="holographics_logo.png" align="right" width="100px" />

# Welcome to Holographics
> Holographics is the fastest and easiest way to add live graphics to your videos. Easily overlay lower-thirds, broadcast messages, ticker tapes and your own custom widgets on any live video feed. Or output Key & Fill signals using a supported application.

[https://hologfx.io/](https://hologfx.io)

_For examples and usage, please refer to the [Documentation][wiki]._

## This is the Holographics REST SDK

This simple library can be used to connect to Holographics and execute functions against its API.

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
const Holographics = require('holographics-client-sdk')

let Holo = new Holographics('http://localhost:3000')

Holo.state.get().then((response) => {
  console.log(response)
})
```

## Meta

Floris Porro – [@florisporro](https://twitter.com/florisporro) – floris@hologfx.io

<!-- Markdown link & img dfn's -->
[wiki]: https://docs.hologfx.io/
