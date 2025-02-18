import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import UpdateProductForm from './components/UpdateProductForm'; 
import CustomerPage from './components/CustomerPage';
import OrderPage from './components/OrderPage';
import AddOrderPage from './components/AddOrderPage';
import AddCustomerPage from './components/AddCustomerPage';
import OrderDetailsPage from './components/OrderDetailsPage';
import CustomerDetailsPage from './components/CustomerDetailsPage';
import './components/global.css';

// Import images from the src/images folder
import laptopImage from './images/laptop.jpg';
import cellphoneImage from './images/cellphone.jpg';
import headphonesImage from './images/headphones.jpg';

const App = () => {
  // Product data
  const [products, setProducts] = useState([
    { 
      id: 1, 
      name: 'Laptop', 
      description: '15 inch laptop with 4K resolution and weighing 4.6 lbs.', 
      price: 1080, 
      image: laptopImage // Use the imported image variable here
    },
    { 
      id: 2, 
      name: 'Smartphone', 
      description: 'A high-end smartphone with 128GB storage and sleek design.', 
      price: 799, 
      image: cellphoneImage // Use the imported image variable here
    },
    { 
      id: 3, 
      name: 'Headphones', 
      description: 'Noise-cancelling headphones with excellent sound quality.', 
      price: 150, 
      image: headphonesImage // Use the imported image variable here
    }
  ]);

  // Function to update a product
  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return (
    <Router>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
          
          {/* Add the UpdateProductForm route */}
          <Route 
            path="/products/update/:id" 
            element={<UpdateProductForm products={products} updateProduct={updateProduct} />} 
          />

          <Route path="/customerpage" element={<CustomerPage />} />
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/addorderpage" element={<AddOrderPage />} />
          <Route path="/addcustomerpage" element={<AddCustomerPage />} />
          <Route path="/customerdetails/:customerId" element={<CustomerDetailsPage />} /> 
          <Route path="/orderdetails/:orderId" element={<OrderDetailsPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
