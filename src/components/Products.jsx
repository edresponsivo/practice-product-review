import Product from "./Product";

const Products = ({ products, removeProduct }) => {
  // console.log(products);
  return (
    <section>
      <div className="title">
        <h2>List of Products To Review</h2>
      </div>
      <div className="products">
        {products.map((product) => {
          // console.log(product);
          return (
            <Product
              key={product.id}
              {...product}
              removeProduct={removeProduct}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Products;
