import './App.css';

import Product from "./Products";
import { useState, useEffect } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  async function fetchFun() {
    let fetchData = await fetch(
      "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter="
    );
    let fetchProduct = await fetchData.json();
    console.log(
      fetchProduct.result.products.filter((i) => i.name.includes(input))
    );
    setData(fetchProduct.result.products.filter((i) => i.name.includes(input)));
    // console.log(data);
  }

  useEffect(() => {
    fetchFun();
  }, [input]);

  return (
    <div className="App">
      <h1 style={{ color: "gold", textAlign: "center" }}>Product List</h1>
      <div className="input-div">
        <input
          className="input"
          type="text"
          placeholder="Enter the Product Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </div>
      <Product data={data} />
    </div>
  );
}