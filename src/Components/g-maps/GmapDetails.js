import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import { useSelector, useDispatch } from "react-redux";
import { getAllRooms, reset } from "../rooms/roomSlice";

const mapContainerStyle = {
  width: 700,
  height: "50vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const GmapDetails = (props) => {
  const center = useMemo(
    () => ({ lat: props.props.lat, lng: props.props.long }),
    []
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
  });
  const mapRef = useRef();

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      options={options}
      onLoad={onMapLoad}
    >
      <Marker
        position={{ lat: props.props.lat, lng: props.props.long }}
        opacity={1}
        icon={{
          url: "../marker-trawell.png",
        }}
      />
    </GoogleMap>
  );
};

export default GmapDetails;
