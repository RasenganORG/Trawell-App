import CardElement from "../page-home/CardElement";
import Navbar from "../page-home/Navbar";
import map from "../../images/map-sample.png";
import MapComp from "../map/MapComp";

export default function FilteredPage() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className="filtered-layout-content">
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
        </div>
        <div
          style={{
            width: "50%",
            position: "fixed",
            marginLeft: "46%",
            marginTop: "3%",
          }}
        >
          <MapComp />
        </div>
      </div>
    </div>
  );
}
