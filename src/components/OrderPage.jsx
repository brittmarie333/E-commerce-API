import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // load orders and customers from local storage
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    setOrders(savedOrders);
    setCustomers(savedCustomers);
  }, []); // empty dependency array ensures this runs only once when the component mounts

  const getCustomerName = (customerId) => {
    const customer = customers.find((customer) => customer.id === customerId);
    return customer ? customer.name : 'Unknown';
  };

  return (
    <div>
      <h2>Order List</h2>
      <div className="order-grid">
        {orders.length === 0 ? (
          <p>No orders found</p>
        ) : (
          orders.map((order) => (
            <div key={order.id}>
              <p><strong>Customer Name:</strong> {getCustomerName(order.customerId)}</p>
              <p><strong>Product ID:</strong> {order.productId}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <Link to={`/orderdetails/${order.id}`}>View Details</Link> 
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderPage;
