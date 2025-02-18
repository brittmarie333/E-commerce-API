import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((product) => product.id === parseInt(id)); // Find the product by its ID

  if (!product) {
    return <p>Product not found!</p>; // Show an error if product is not found
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-details-img" />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>

      {/* Update Product Button */}
      <Link to={`/products/update/${product.id}`}>
        <button>Update Product</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
