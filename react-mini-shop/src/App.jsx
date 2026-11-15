import "./App.css";
const products = [
  {
    id: 1,
    name: "ხის სკამი",
    price: 60,
    description: "მისაღები ოთახისთვის",
  },
  {
    id: 2,
    name: "თბილი ლამპა",
    price: 35,
    description: "საძინებლისთვის",
  },
  {
    id: 3,
    name: "პატარა მაგიდა",
    price: 120,
    description: "მისაღები ოთახისთვის",
  },
  {
    id: 4,
    name: "წიგნი",
    price: 30,
    description: "მაგიდისთვის",
  },
];

function ProductCards({ productName, price, description }) {
  function handleAddToCart() {
    alert(productName + " დაემატა კალათაში.");
  }
  return (
    <>
      <article className="First">
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={handleAddToCart}>კალათაში დამატება</button>
      </article>
    </>
  );
}

// const result =products.map(ProductCards)
// console.log(result)
export default function App() {
  return (
    <main>
      <h1>Mini-Shop</h1>

      {products.map(function (product) {
        return (
          <ProductCards
            key={product.id}
            productName={product.name}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </main>
  );
}

