import { getAllRooms, reset } from "./roomSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Spinner from "../Spinner";
import { Layout, Row, Empty, Col } from "antd";
import CardComp from "./CardComp";
import MapAllMarkers from "../g-maps/MapAllMarkers";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../g-maps/mapStyles";
import "@reach/combobox/styles.css";

export default function Rooms() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCmfu6Aiv5Dlg63FNEXs5kI-AIMVJ6xg1Q",
  });
  const mapContainerStyle = {
    width: 700,
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

  const { rooms, isLoading, search } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();
  const pos = rooms.map((el) => el.location.coord);
  const [columns, setColumns] = useState({
    roomsColumns: 24,
    mapColumns: 0,
  });

  useEffect(() => {
    if (!search) {
      dispatch(getAllRooms());
    } else {
      setColumns({ roomsColumns: 12, mapColumns: 12 });
    }
  }, [dispatch, search]);

  if (isLoading) {
    return <Spinner />;
  }

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";
  if (rooms)
    return (
      <Layout
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Row>
          <Col span={columns.roomsColumns}>
            <Row gutter={[16, 24]}>
              {rooms ? (
                rooms.map((room, id) => {
                  return <CardComp room={room} index={id} />;
                })
              ) : (
                <Empty
                  style={{ margin: "auto", marginTop: "20%" }}
                  description='Nothing to see here!'
                />
              )}
            </Row>
          </Col>
          <Col span={columns.mapColumns}>
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
          </Col>
        </Row>
      </Layout>
    );
}
