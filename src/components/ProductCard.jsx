
import React from 'react';
import { Link } from 'react-router-dom'; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`} className="view-details-link">View Details</Link>
    </div>
  );
};

export default ProductCard;
