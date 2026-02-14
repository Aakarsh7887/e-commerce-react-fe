import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Shopy</h1>
        <p className="home-subtitle">
          Discover amazing products at great prizes
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((ele) => (
            <ProductCard props={ele} key={ele.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
