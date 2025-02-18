import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProductForm = ({ products, updateProduct }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || '');
  const [image, setImage] = useState(product?.image || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      setError('All fields are required.');
      return;
    }

    if (isNaN(price) || price <= 0) {
      setError('Price must be a valid number greater than 0.');
      return;
    }

    const updatedProduct = { id: product.id, name, description, price, image };
    updateProduct(updatedProduct);
    navigate(`/products/${product.id}`);
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Update Product</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Description: </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Price: </label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>Image URL: </label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
