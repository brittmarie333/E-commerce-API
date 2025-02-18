import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateProductForm = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', image: '' });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate adding a product (replace with an API call)
    console.log('Product Added:', product);

    // Redirect to product list after adding product
    history.push('/');
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={product.description} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={product.image} onChange={handleChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default CreateProductForm;
