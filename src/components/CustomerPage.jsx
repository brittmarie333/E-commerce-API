import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from localStorage when the component mounts
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    setCustomers(savedCustomers);
  }, []);

  return (
    <div>
      <h2>Customer List</h2>

      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <Link to={`/customerdetails/${customer.id}`}>{customer.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers added yet!</p>
      )}
    </div>
  );
};

export default CustomerPage;
