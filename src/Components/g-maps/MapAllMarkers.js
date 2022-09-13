import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";
import { getAllRooms, reset } from "../rooms/roomSlice";
import { useSelector, useDispatch } from "react-redux";

const mapContainerStyle = {
  width: 700,
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const MapAllMarkers = () => {
  const { rooms } = useSelector((state) => state.rooms);
  const pos = rooms.map((el) => el.location.coord);
  const dispatch = useDispatch();
  const center = useMemo(() => ({ lat: 45, lng: 25 }), []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    dispatch(getAllRooms());
    dispatch(reset());
  }, [dispatch, reset]);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  if (rooms)
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={4}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {pos.map((marker) => (
          <Marker
            position={{ lat: marker.lat, lng: marker.long }}
            opacity={1}
            icon={{
              url: "../marker-trawell.png",
            }}
          />
        ))}
      </GoogleMap>
    );
};

export default MapAllMarkers;
