import CardElement from "../page-home/CardElement";
import Navbar from "../page-home/Navbar";
import MapWrapper from "../map/MapWrapper";

const cardElements = Array(8).fill(1);

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
          {cardElements.map((element, index) => (
            <CardElement key={index} altkey={index} />
          ))}
        </div>
        <div
          style={{
            width: "50%",
            position: "fixed",
            marginLeft: "46%",
            marginTop: "3%",
          }}
        >
          <MapWrapper />
        </div>
      </div>
    </div>
  );
}
