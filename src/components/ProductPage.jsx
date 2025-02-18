import React from 'react';
import ProductCard from './ProductCard';

const ProductPage = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
