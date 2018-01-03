<template>
  <div>
    <div id="mapView" style="height:600px">
    </div>
  </div>
</template>

<script>
import * as esriMapLoader from 'esri-loader'
export default {
  name: 'HelloMap',
  data () {
    return {
    }
  },
  methods: {
    //创建地图
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
    },
    initMap: function () {
      const cVue = this
      //初始化esriLoader
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
    }
  },
  mounted: function () {
    let cVue = this
    cVue.initMap()
  }
}
</script>

<style scoped>
@import url('http://localhost:8090/arcgis_js_api/library/4.6/esri/css/main.css');
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
