import React, { useState } from 'react';

const AddCustomerPage = ({ addCustomer }) => {
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (customer.name.trim() === '' || customer.email.trim() === '' || customer.phone.trim() === '') {
      setError('All fields are required');
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,}$/;
    if (!emailPattern.test(customer.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const existingCustomers = JSON.parse(localStorage.getItem('customers')) || [];
      const newCustomer = { 
        id: Date.now(), 
        name: customer.name, 
        email: customer.email, 
        phone: customer.phone 
      };
      existingCustomers.push(newCustomer);
      localStorage.setItem('customers', JSON.stringify(existingCustomers));

      setCustomer({ name: '', email: '', phone: '' });
      setIsModalVisible(true);
    } catch (e) {
      setError('Error saving customer.');
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <h2>Add Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={customer.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Customer Email"
          value={customer.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Customer Phone"
          value={customer.phone}
          onChange={handleChange}
        />
        <button type="submit">Add Customer</button>
      </form>

      {isModalVisible && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modalContent}>
            <h3>Customer Added Successfully!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for the modal
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Make sure the modal is above other content
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default AddCustomerPage;
