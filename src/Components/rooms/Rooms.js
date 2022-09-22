import { getAllRooms, reset } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Spinner from "../Spinner";
import { Layout, Row, Empty, Col } from "antd";
import CardComp from "./CardComp";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../g-maps/mapStyles";
import "@reach/combobox/styles.css";
import { Link } from "react-router-dom";

export default function Rooms() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
  });
  const { user } = useSelector((state) => state.auth);
  const { rooms, isLoading, search } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const [columns, setColumns] = useState({
    roomsColumns: 22,
    mapColumns: 0,
  });

  const [filteredRooms, setFilteredRooms] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!search) {
      if (!user) {
        dispatch(getAllRooms());
      } else {
        dispatch(getAllRooms(user.id));
      }
    } else {
      setColumns({ roomsColumns: 12, mapColumns: 12 });
    }
  }, [search]);

  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
  };
  const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const mapRef = useRef();
  const center = useMemo(() => ({ lat: 45, lng: 25 }), []);
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onBoundsChanged = () => {
    console.log("bounds are", mapRef.current.getBounds());
    const maxLat = mapRef.current.getBounds().Ab.hi;
    const minLat = mapRef.current.getBounds().Ab.lo;
    const maxLong = mapRef.current.getBounds().Va.hi;
    const minLong = mapRef.current.getBounds().Va.lo;
    setFilteredRooms(
      rooms.filter(
        (el) =>
          el.location.coord.lat <= maxLat &&
          el.location.coord.lat >= minLat &&
          el.location.coord.long <= maxLong &&
          el.location.coord.long >= minLong
      )
    );
  };

  console.log("filtered rooms are", filteredRooms);

  if (isLoading) {
    return <Spinner />;
  }

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  return (
    <>
      <Row>
        <Col className='gutter-row' span={columns.roomsColumns}>
          <Row>
            {filteredRooms.length > 0
              ? filteredRooms.map((room, id) => {
                  return <CardComp room={room} />;
                })
              : rooms?.map((room, id) => {
                  return <CardComp room={room} />;
                })}
          </Row>
        </Col>
        <Col span={columns.mapColumns}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={4}
            center={center}
            options={options}
            onLoad={onMapLoad}
            onBoundsChanged={onBoundsChanged}
          >
            {filteredRooms.map((marker) => (
              <>
                <Marker
                  onClick={() => {
                    setSelected(marker.id);
                  }}
                  position={{
                    lat: marker.location.coord.lat,
                    lng: marker.location.coord.long,
                  }}
                  opacity={1}
                  icon={{
                    url: "../marker-trawell.png",
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),
                  }}
                />
                {selected === marker.id && (
                  <InfoWindow
                    position={{
                      lat: marker.location.coord.lat,
                      lng: marker.location.coord.long,
                    }}
                    onCloseClick={() => {
                      setSelected(null);
                    }}
                  >
                    <>
                      <Link to={`/rooms/${marker.id}`}>
                        <h5>
                          {marker?.location.country},{marker?.location.city}
                        </h5>
                      </Link>
                      <h5>$ {marker?.location.price}</h5>
                    </>
                  </InfoWindow>
                )}
              </>
            ))}
          </GoogleMap>
        </Col>
      </Row>
    </>
  );
}
