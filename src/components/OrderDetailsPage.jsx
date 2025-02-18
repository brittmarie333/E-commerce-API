import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './global.css'; // Ensure this file is imported for styling

const OrderDetailsPage = () => {
  const { orderId } = useParams(); // Get the order ID from the URL
  const [order, setOrder] = useState(null);
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate(); // To navigate back to the order list page after deletion

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    
    const foundOrder = savedOrders.find((order) => order.id === parseInt(orderId));
    const orderCustomer = savedCustomers.find((customer) => customer.id === foundOrder?.customerId);
    
    if (foundOrder) {
      setOrder(foundOrder);
      setCustomers(orderCustomer);  // Set customer data for order details
    }
  }, [orderId]);

  const handleDelete = () => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const updatedOrders = orders.filter((order) => order.id !== parseInt(orderId));

    // Update localStorage with the remaining orders
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Redirect back to the order list page
    navigate('/orderpage');
  };

  if (!order) return <p>Order not found</p>;

  return (
    <div className="page-wrapper">
      <h2>Order Details</h2>

      <div className="page-content">
        <p><strong>Customer Name:</strong> {customers?.name}</p>
        <p><strong>Product ID:</strong> {order.productId}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>
      </div>
      
      {/* Apply button styles from global.css */}
      <button onClick={handleDelete} className="btn">Delete Order</button>
    </div>
  );
};

export default OrderDetailsPage;
