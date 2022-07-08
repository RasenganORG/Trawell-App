import img1 from "../../images/travel-images/c1.png";

export default function GridUploads() {
  return (
    <div
      style={{
        display: "flex",
        gridTemplateColumns: "repeat(4, 4fr)",
      }}
    >
      <img src={img1}></img>
    </div>
  );
}
