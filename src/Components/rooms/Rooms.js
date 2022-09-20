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
  Rectangle,
} from "@react-google-maps/api";
import mapStyles from "../g-maps/mapStyles";
import "@reach/combobox/styles.css";

export default function Rooms() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
  });

  const { rooms, isLoading, search } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const pos = rooms.map((el) => el.location.coord);
  const [columns, setColumns] = useState({
    roomsColumns: 22,
    mapColumns: 0,
  });

  const [filteredRooms, setFilteredRooms] = useState([]);

  useEffect(() => {
    if (!search) {
      dispatch(getAllRooms());
    } else {
      setColumns({ roomsColumns: 12, mapColumns: 12 });
    }
  }, [dispatch, search]);

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
    const maxLat = mapRef.current.getBounds().Bb.hi;
    const minLat = mapRef.current.getBounds().Bb.lo;
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
        </Col>
      </Row>
    </>
  );
}
