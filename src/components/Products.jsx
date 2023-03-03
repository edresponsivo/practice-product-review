import Product from "./Product";

const Products = ({ products }) => {
    console.log(products);
  return (
    <section>
      <div className="title">
        <h2>List of Products</h2>
      </div>
      <div className="products">
        {products.map((product) => {
            // console.log(product);
            return (
        <Product key={product.id} {...product} />
        )})}
      </div>
    </section>
  );
};
export default Products;
