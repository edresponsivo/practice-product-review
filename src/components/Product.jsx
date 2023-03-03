const Product = ({
  id,
  title,
  description,
  price,
  rating,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <article className="single-product">
      <div className="prod-header">
        <img src={thumbnail} alt={title} />
        <h4 className="product-price">${price}</h4>
      </div>
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>

        <ul className="prod-details">
          <li>{rating} (⭐)</li>
          <li>{brand}</li>
          <li>{category}</li>
        </ul>
      </div>
      <div className="prod-footer">
        <button className="delete-btn">Remove Product</button>
      </div>
    </article>
  );
};
export default Product;
