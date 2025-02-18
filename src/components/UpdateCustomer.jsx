import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCustomer = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
      const customerData = savedCustomers.find((customer) => customer.id === parseInt(id));

      if (customerData) {
        setCustomer({ name: customerData.name, email: customerData.email, phone: customerData.phone });
      } else {
        setError('Customer not found.');
      }
    } catch (e) {
      setError('Error loading customer data.');
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.email || !customer.phone) {
      setError('All fields are required.');
      return;
    }

    try {
      const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
      const updatedCustomers = savedCustomers.map((customer) =>
        customer.id === parseInt(id) ? { ...customer, ...customer } : customer
      );

      localStorage.setItem('customers', JSON.stringify(updatedCustomers));
      navigate('/customers');
    } catch (e) {
      setError('Error updating customer.');
    }
  };

  return (
    <div>
      <h2>Update Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          placeholder="Customer Name"
        />
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <button type="submit">Update Customer</button>
      </form>
    </div>
  );
};

export default UpdateCustomer;
