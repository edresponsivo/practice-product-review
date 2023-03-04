import { useState } from "react";

const Product = ({
  id,
  title,
  description,
  price,
  rating,
  brand,
  category,
  thumbnail,
  removeProduct,
  images,
}) => {
  const [showImgId, setShowImgId] = useState(1);
  // console.log(images);

  const handleShowImage = (prdId) => {
    console.log(`will show the image of product id: ${prdId}`);
    setShowImgId(prdId)
  }

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
      {showImgId === id && (
        <div className="gallery">
          {images.map((image) => (
            <img src={image} className="gallery-img" />
          ))}
          <button onClick={() => setShowImgId(null)}>X</button>
        </div>
      )}
      <div className="prod-footer">
        <button className="btn" onClick={() => handleShowImage(id)}>See images</button>
        <button className="delete-btn" onClick={() => removeProduct(id)}>
          Remove Product
        </button>
      </div>
    </article>
  );
};
export default Product;
