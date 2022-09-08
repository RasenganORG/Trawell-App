import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "45vw",
  height: "50vh",
};

const center = {
  lat: 45,
  lng: 25,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Gmap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(11);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div>
      <SearchPlace panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            onClick={() => {
              setSelected(marker);
            }}
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            draggable={true}
            opacity={1}
            icon={{
              url: "./marker-trawell.png",
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h5>Your Location</h5>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Gmap;

function SearchPlace({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 45, lng: () => 25 },
      radius: 200 * 1000,
    },
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Enter address'
      />
      <ComboboxPopover>
        {status === "OK" &&
          data.map(({ id, description }) => (
            <ComboboxOption key={id} value={description} />
          ))}
      </ComboboxPopover>
    </Combobox>
  );
}
