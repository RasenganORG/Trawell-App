import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Style, Icon } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { osm, vector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "./Controls";
import FeatureStyles from "./Features/Styles";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import mapConfig from "./config.json";
import { Button } from "antd";

const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];

function addMarkers(lonLatArray) {
  var iconStyle = new Style({
    image: new Icon({
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      src: mapConfig.markerImage32,
    }),
  });
  let features = lonLatArray.map((item) => {
    let feature = new Feature({
      geometry: new Point(fromLonLat(item)),
    });
    feature.setStyle(iconStyle);
    return feature;
  });
  return features;
}

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value) => console.log(value);

const MyMap = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(5);

  const [showMarker, setShowMarker] = useState(true);

  const [features, setFeatures] = useState(addMarkers(markersLonLat));

  return (
    <div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />

          {showMarker && <VectorLayer source={vector({ features })} />}
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>

      <div>
        <input
          type='checkbox'
          checked={showMarker}
          onChange={(event) => setShowMarker(event.target.checked)}
        />{" "}
        Show markers
      </div>
      <Space direction='vertical'>
        <Search
          placeholder='input search text'
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </Space>
    </div>
  );
};

export default MyMap;
