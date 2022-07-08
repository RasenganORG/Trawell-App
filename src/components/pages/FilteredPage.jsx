import CardElement from "../page-home/CardElement";
import Navbar from "../page-home/Navbar";
import map from "../../images/map-sample.png";

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
        </div>
        <img
          src={map}
          style={{
            marginLeft: "50%",
            width: "45%",
            height: "350px",
            marginTop: "30px",
            position: "fixed",
          }}
        ></img>
      </div>
    </div>
  );
}
