# vue-elementui-arcgis

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Develop Step

``` bash
# lead into esri-loader
import * as esriMapLoader from 'esri-loader'


# import css (at Tomcat)
@import url('http://localhost:8090/arcgis_js_api/library/4.6/esri/css/main.css')

# Loading Modules from the ArcGIS API for JavaScript
if (!esriMapLoader.isLoaded()) {
  esriMapLoader.bootstrap((err) => {
    if (err) {
      console.error(err)
    }
    cVue.createMap(esriMapLoader)
  }, {
    url: 'http://localhost:8090/arcgis_js_api/library/4.6/init.js'
  })
} else {
    cVue.createMap(esriMapLoader)
}

createMap: function (loader) {
  const mapLoader = loader
  mapLoader.dojoRequire([
    'esri/Map',
    'esri/views/SceneView'
    ], ( Map, SceneView) => {
      let view = new SceneView({
        container: "mapView",
        map: new Map({
          baseMap: "satellite",
          ground: "world-elevation"
        }),
        zoom: 2,
          center: [-112, 38]
        })
    })
}
```
