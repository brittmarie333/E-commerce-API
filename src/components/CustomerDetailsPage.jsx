import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CustomerDetailsPage = () => {
  const { customerId } = useParams(); // get the customer ID from the URL
  const [customer, setCustomer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedCustomer, setUpdatedCustomer] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // navigate back to the customer list page after deletion

  useEffect(() => {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const foundCustomer = customers.find((customer) => customer.id === parseInt(customerId));

    if (foundCustomer) {
      setCustomer(foundCustomer);
      setUpdatedCustomer({ name: foundCustomer.name, email: foundCustomer.email, phone: foundCustomer.phone });
    }
  }, [customerId]);

  const handleDelete = () => {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const updatedCustomers = customers.filter((customer) => customer.id !== parseInt(customerId));

    // update localStorage with the remaining customers
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));

    // reedirect back to the customer list page
    navigate('/customerpage');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!updatedCustomer.name || !updatedCustomer.email || !updatedCustomer.phone) {
      setError('All fields are required.');
      return;
    }

    try {
      const customers = JSON.parse(localStorage.getItem('customers')) || [];
      const updatedCustomers = customers.map((cust) =>
        cust.id === parseInt(customerId) ? { ...cust, ...updatedCustomer } : cust
      );

      localStorage.setItem('customers', JSON.stringify(updatedCustomers));
      setCustomer(updatedCustomer);
      setIsEditing(false); //switch off
      setError('');
    } catch (e) {
      setError('Error updating customer.');
    }
  };

  if (!customer) return <p>Customer not found</p>;

  return (
    <div>
      <h2>Customer Details</h2>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={updatedCustomer.name}
            onChange={handleChange}
            placeholder="Customer Name"
          />
          <input
            type="email"
            name="email"
            value={updatedCustomer.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="phone"
            value={updatedCustomer.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <button type="submit">Update Customer</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Phone:</strong> {customer.phone}</p>
          
          {/* edit button */}
          <button onClick={() => setIsEditing(true)}>Edit Customer</button>
        </div>
      )}

      {/* delete button */}
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
};

export default CustomerDetailsPage;
