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

  const removeProduct = (prodId) => {
    setProducts(products.filter((product) => product.id !== prodId));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  {
    if (products.length === 0) {
      return (
        <main>
          <section>
            <div className="title">
              <h2>List of Products To Review is Empty</h2>
            </div>
            <button className="btn" onClick={() => fetchProducts()}>
              Load the list of Products
            </button>
            <div></div>
          </section>
        </main>
      );
    } else {
      return (
        <main>
          <Products products={products} removeProduct={removeProduct} />
        </main>
      );
    }
  }
};
export default App;
