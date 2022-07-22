import React, { useEffect } from "react";

import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";

const initialMap = new Map({
  target: null,
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    projection: "EPSG:3857",
    center: [0, 0],
    zoom: 1,
  }),
  controls: [],
});

function MapWrapper() {
  useEffect(() => {
    initialMap.setTarget("map");
  }, []);
  return (
    <div>
      <div id="map" className="map-container"></div>
    </div>
  );
}

export default MapWrapper;
