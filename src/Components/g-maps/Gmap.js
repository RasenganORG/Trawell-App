import { useCallback, useMemo, useRef, useState } from "react";
import { setAutoComplete, reset } from "../rooms/roomSlice";
import { useDispatch } from "react-redux";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Autocomplete,
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

import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "45vw",
  height: "50vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

let formInfo = {};

const Gmap = (props) => {
  const { formData, setFormData } = props.formInfo;
  formInfo = props.formInfo;
  const center = useMemo(() => ({ lat: 45, lng: 25 }), []);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const onMapClick = useCallback((event) => {
    setMarkers(() => [
      {
        lat: event.latLng.lat(),
        long: event.latLng.lng(),
      },
    ]);
    const coord = {
      lat: event.latLng.lat(),
      long: event.latLng.lng(),
    };

    setFormData({
      ...formData,
      location: {
        ...formData.location,
        coord,
      },
    });
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <div>
      <SearchPlace panTo={panTo} formInfo={props.formInfo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={3}
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
            position={{ lat: marker.lat, lng: marker.long }}
            opacity={1}
            icon={{
              url: "../marker-trawell.png",
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Gmap;

function SearchPlace({ panTo }) {
  const { formData, setFormData } = formInfo;
  const dispatch = useDispatch();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 45, lng: () => 25 },
      radius: 100 * 1000,
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
      let fields = address.split(", ");
      dispatch(
        setAutoComplete({
          streetf: fields[0],
          cityf: fields[1],
          countryf: fields[2],
        })
      );
      setFormData((prevState) => ({
        ...prevState,
        location: {
          ...prevState.location,
          country: fields[2],
          city: fields[1],
          street: fields[0],
        },
      }));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className='search'>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder='Street name'
        />
        <ComboboxPopover>
          {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
