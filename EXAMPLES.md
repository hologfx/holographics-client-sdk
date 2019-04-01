# Holographics API

These are the current services and methods present in the API with examples. This document is auto-generated every release.

## Fonts

### REST

GET /api/fonts/ - ()

### Websocket

**getFonts** ()

### SDK Examples

**Example for: get**

```node
Holographics.fonts.get().then((response) => {
  console.log(response)
})
```

## Log

### REST

GET /api/log/ - ()

### Websocket

**getLog** ()

### SDK Examples

**Example for: get**

```node
Holographics.log.get().then((response) => {
  console.log(response)
})
```

## Status

### REST

GET /api/status/ - ()

### Websocket

**getStatus** ()

### SDK Examples

**Example for: get**

```node
Holographics.status.get().then((response) => {
  console.log(response)
})
```

## State

### REST

GET /api/state/ - ()

PUT /api/state/ - (data)

PATCH /api/state/ - (data)

DELETE /api/state/ - ()

### Websocket

**getState** ()

**updateState** (data)

**patchState** (data)

**removeState** ()

### SDK Examples

**Example for: get**

```node
Holographics.state.get().then((response) => {
  console.log(response)
})
```

**Example for: update**

```node
Holographics.state.update({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.state.patch({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.state.remove().then((response) => {
  console.log(response)
})
```

## Style

### REST

GET /api/style/ - (data)

### Websocket

**getStyle** (data)

### SDK Examples

**Example for: get**

```node
Holographics.style.get({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

## Themes

### REST

GET /api/themes/ - ()

GET /api/themes/:id - (id)

PUT /api/themes/:id - (id,data)

DELETE /api/themes/:id - (id)

POST /api/themes/validate - (data)

GET /api/themes/reset - ()

### Websocket

**findThemes** ()

**getTheme** (id)

**updateTheme** (id,data)

**removeTheme** (id)

**validateTheme** (data)

**resetThemes** ()

### SDK Examples

**Example for: find**

```node
Holographics.themes.find().then((response) => {
  console.log(response)
})
```

**Example for: get**

```node
Holographics.themes.get({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: update**

```node
Holographics.themes.update({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.themes.remove({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: validate**

```node
Holographics.themes.validate({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: reset**

```node
Holographics.themes.reset().then((response) => {
  console.log(response)
})
```

## Palettes

### REST

GET /api/palettes/ - ()

POST /api/palettes/ - (data)

GET /api/palettes/:id - (id)

PUT /api/palettes/:id - (id,data)

PATCH /api/palettes/:id - (id,data)

DELETE /api/palettes/:id - (id)

### Websocket

**findPalettes** ()

**createPalette** (data)

**getPalette** (id)

**updatePalette** (id,data)

**patchPalette** (id,data)

**removePalette** (id)

### SDK Examples

**Example for: find**

```node
Holographics.palettes.find().then((response) => {
  console.log(response)
})
```

**Example for: create**

```node
Holographics.palettes.create({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: get**

```node
Holographics.palettes.get({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: update**

```node
Holographics.palettes.update({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.palettes.patch({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.palettes.remove({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

## MediaFiles

### REST

GET /api/mediafiles/ - ()

### Websocket

**getMediaFiles** ()

### SDK Examples

**Example for: get**

```node
Holographics.mediafiles.get().then((response) => {
  console.log(response)
})
```

## Widgets

### REST

GET /api/widgets/ - ()

POST /api/widgets/ - (data)

GET /api/widgets/:id - (id)

PUT /api/widgets/:id - (id,data)

PATCH /api/widgets/:id - (id,data)

DELETE /api/widgets/:id - (id)

PUT /api/widgets/:id/toggle - (id,data)

### Websocket

**findWidgets** ()

**createWidget** (data)

**getWidget** (id)

**updateWidget** (id,data)

**patchWidget** (id,data)

**removeWidget** (id)

**toggleWidget** (id,data)

### SDK Examples

**Example for: find**

```node
Holographics.widgets.find().then((response) => {
  console.log(response)
})
```

**Example for: create**

```node
Holographics.widgets.create({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: get**

```node
Holographics.widgets.get({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: update**

```node
Holographics.widgets.update({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.widgets.patch({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.widgets.remove({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: toggle**

```node
Holographics.widgets.toggle({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

## Entries

### REST

GET /api/entries/ - (data)

POST /api/entries/ - (data)

GET /api/entries/:id - (id)

PUT /api/entries/:id - (id,data)

PATCH /api/entries/:id - (id,data)

DELETE /api/entries/:id - (id)

### Websocket

**findEntries** (data)

**createEntry** (data)

**getEntry** (id)

**updateEntry** (id,data)

**patchEntry** (id,data)

**removeEntry** (id)

### SDK Examples

**Example for: find**

```node
Holographics.entries.find({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: create**

```node
Holographics.entries.create({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: get**

```node
Holographics.entries.get({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

**Example for: update**

```node
Holographics.entries.update({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.entries.patch({
  id: 'resource id'
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.entries.remove({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

## WidgetModules

### REST

GET /api/widgetmodules/ - ()

GET /api/widgetmodules/refresh - ()

GET /api/widgetmodules/reset - ()

### Websocket

**getWidgetModules** ()

**refreshWidgetModules** ()

**resetWidgetModules** ()

### SDK Examples

**Example for: get**

```node
Holographics.widgetmodules.get().then((response) => {
  console.log(response)
})
```

**Example for: refresh**

```node
Holographics.widgetmodules.refresh().then((response) => {
  console.log(response)
})
```

**Example for: reset**

```node
Holographics.widgetmodules.reset().then((response) => {
  console.log(response)
})
```

## Settings

### REST

GET /api/settings/ - ()

PATCH /api/settings/ - (data)

### Websocket

**getSettings** ()

**patchSettings** (data)

### SDK Examples

**Example for: get**

```node
Holographics.settings.get().then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.settings.patch({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

## Update

### REST

GET /api/update/ - ()

GET /api/update/download - ()

GET /api/update/cancelDownload - ()

GET /api/update/install - ()

### Websocket

**getUpdate** ()

**downloadUpdate** ()

**cancelDownloadUpdate** ()

**installUpdate** ()

### SDK Examples

**Example for: get**

```node
Holographics.update.get().then((response) => {
  console.log(response)
})
```

**Example for: download**

```node
Holographics.update.download().then((response) => {
  console.log(response)
})
```

**Example for: cancelDownload**

```node
Holographics.update.cancelDownload().then((response) => {
  console.log(response)
})
```

**Example for: install**

```node
Holographics.update.install().then((response) => {
  console.log(response)
})
```

## License

### REST

GET /api/license/ - ()

PATCH /api/license/ - (data)

DELETE /api/license/ - ()

GET /api/license/validate - ()

### Websocket

**getLicense** ()

**patchLicense** (data)

**removeLicense** ()

**validateLicense** ()

### SDK Examples

**Example for: get**

```node
Holographics.license.get().then((response) => {
  console.log(response)
})
```

**Example for: patch**

```node
Holographics.license.patch({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.license.remove().then((response) => {
  console.log(response)
})
```

**Example for: validate**

```node
Holographics.license.validate().then((response) => {
  console.log(response)
})
```

## Machines

### REST

POST /api/machines/ - (data)

DELETE /api/machines/:id - (id)

### Websocket

**createMachine** (data)

**removeMachine** (id)

### SDK Examples

**Example for: create**

```node
Holographics.machines.create({
  data: {
    resource: 'data'
  }
}).then((response) => {
  console.log(response)
})
```

**Example for: remove**

```node
Holographics.machines.remove({
  id: 'resource id'
}).then((response) => {
  console.log(response)
})
```

