import CardElement from "./CardElement";

const cardElements = Array(8).fill(1);

export default function Content() {
  return (
    <div className="site-layout-content">
      {cardElements.map((element, index) => (
        <CardElement key={index} altkey={index} />
      ))}
    </div>
  );
}
