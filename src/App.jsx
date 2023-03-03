import { useState, useEffect } from "react";

import Loading from "./components/Loading";

import Products from "./components/Products";

const url = "https://dummyjson.com/products";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const productsData = await response.json();
      // console.log(productsData.products);
      setProducts(productsData.products);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("using UseEffect only on first render...");
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Products products={products} />
    </main>
  );
};
export default App;
