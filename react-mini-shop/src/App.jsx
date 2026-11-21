import "./App.css";
import { useState } from "react";
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

function ProductCards({ productName, price, description, handleAddToCart, product }) {
  return (
    <>
      <article className="First">
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={() => handleAddToCart(product)}>კალათაში დამატება</button>
      </article>
    </>
  );
}

// const result =products.map(ProductCards)
// console.log(result)
export default function App() {
  const [count, setCount] = useState(0);
  const[total, setTotal] = useState(0);
  const[cart, setCart] = useState([]);

  function handleAddToCart(product) {
    setCount(count + 1);
    setTotal(total + product.price);
    setCart([...cart, product]);
  }
  function handleCleanToCart() {
    setCount(0);
    setTotal(0);
    setCart([]);
  }
  return (
    <main>
      <h1>Mini-Shop</h1>
      <p>{count}</p>
      <button onClick={handleCleanToCart}>გასუფთავება</button>
      <p>{total}</p>

      {products.map(function (product) {
        return (
          <ProductCards
            key={product.id}
            productName={product.name}
            price={product.price}
            description={product.description}
            product={product}
            handleAddToCart={handleAddToCart}
            handleCleanToCart={handleCleanToCart}
          />
        );
      })}
    </main>
  );
}
