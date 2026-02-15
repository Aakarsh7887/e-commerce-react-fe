import { Link } from "react-router-dom";
function ProductCard({ props }) {
  return (
    <div className="product-card">
      <img
        src={props.image}
        alt="product-image"
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{props.title}</h3>
        <p className="product-card-price">${props.price}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary" >View Details</Link>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
