import "./App.css";
function ProductCards() {
  const productName = "Chair";
  const price = 60;
  return (
    <>
      <h1>Mini-Shop</h1>
      <article className="First">
        <h2>{productName}</h2>
        <p>{price}</p>
      </article>
    </>
  );
}
export default function App() {
  return(
  <><ProductCards /></>
  );
}
