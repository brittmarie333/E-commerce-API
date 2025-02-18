# E-commerce Web Application :shopping_cart:

### Project Overview
This project is an e-commerce web application built using **React**. It allows customers to browse products, place orders, and manage their personal information. Administrators can manage customers, products, and orders. The app is structured into several components and uses a backend API to manage and fetch data.

---


### **Project Requirements :memo:**

Below is a breakdown of the core features and components implemented in this e-commerce application.

---

### **Customer and CustomerAccount Management:**

#### **Create Customer Form (AddCustomerPage.jsx):**
- A form is created for capturing customer details (name, email, and phone number).
- Validation is implemented to ensure proper formatting of customer data.

![Create Customer Form](\createcustomerSS.jpg)

#### **Read Customer Details:**
- A component is created to fetch customer data from the backend using their unique ID.
- Customer details are displayed upon successful fetch.

![Read Customer Details](\customerdetails.jpg)

#### **Update Customer Form:**
- The form allows users to update customer details, including name, email, and phone number.
- The backend is updated accordingly when data is changed.

![Update Customer Form](\updatecustSS.jpg)

#### **Delete Customer Information:**
- A delete function is available in the customer detail component. It removes customer data from the backend using their unique ID.

```
  const handleDelete = () => {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const updatedCustomers = customers.filter((customer) => customer.id !== parseInt(customerId));

    // Update localStorage with the remaining customers
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));

    // Redirect back to the customer list page
    navigate('/customerpage');
  };

```

---

### **Product Catalog:**

#### **List Products (ProductPage.jsx):**
- A component is created to display a list of all available products, showing essential information such as name, price, and description.

![Products Page](\productSS.jpg)


#### **Read Product Details (ProductDetailsPage.jsx):**
- A component fetches and displays detailed product information, including name, price, description, and image.

![Product Details](\proddetailsSS.jpg)

#### **Update Product Form (UpdateProductForm.jsx):**
- A form is available to update product information like name, description, and price.
 
![Update Product Form](\updateprodSS.jpg)

---

### **Order Processing:**

#### **Place Order Form (AddOrderPage.jsx):**
- Customers can use this form to place orders, specifying the products to purchase and entering required details (e.g., customer info, quantity).

![Order Form Screenshot](\addorderSS.jpg)




### **Component Creation and Organization:**

- Components are structured logically within a `/components` directory.
- Functional components are used for each section of the app (e.g., CustomerForm, ProductCard).
- React hooks like `useState`, `useEffect`, and `useContext` are used to manage state and side effects.

```component for product card


import React from 'react';
import { Link } from 'react-router-dom'; // To link to the product details page

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link> {/* Link to product details page */}
    </div>
  );
};

export default ProductCard;



```

---

### **Routing and Navigation:**

- **React Router** is used to implement routing, allowing users to navigate between the home page, product page, customer details, order page, etc.
- **NavigationBar.jsx** contains links that provide easy navigation to different sections of the app.
```navbar with routing

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/customerpage">Customers</Link></li>
        <li><Link to="/orderpage">Orders</Link></li>
        <li><Link to="/addorderpage" className="btn">New Order?</Link></li>
        <li><Link to="/addcustomerpage" className="btn">New Customer?</Link></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;

```

---

### **Forms and Form Handling:**

- Forms are created for customer creation, product management, and order placement.
- **Form validation** ensures that inputs meet required criteria (e.g., name, email, price).
- Form data is managed with React state and hooks, and submission is handled using API calls.

```
 if (customer.name.trim() === '' || customer.email.trim() === '' || customer.phone.trim() === '') {
  alert('All fields are required');
  return;
}

```

---

### **Event Handling:**

- **Event handlers** are used for actions like form submissions, button clicks, and triggering updates (e.g., creating, deleting, or editing customer/product/order records).

```

const handleSubmit = (e) => {
  e.preventDefault(); // Prevents the default form submission behavior (page reload)
  const updatedProduct = { id: product.id, name, description, price, image };
  updateProduct(updatedProduct); // Calls the function passed as a prop to update the product
  navigate(`/products/${product.id}`); // Navigates back to the product details page after updating
};


```


---

### **Integration with React-Bootstrap:**

- React-Bootstrap components are used for a responsive UI and provide essential UI elements such as buttons, forms, modals, and navigation components.
- Bootstrap CSS is applied for a visually appealing and consistent layout across devices.

Although Bootstrap allows for quick and easy styling and set up of components, I had trouble with the NavBar toggler button and had to hide the element through css. This stopped the menu toggler button from showing up while the page is expanded.

```
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';  // Import components from react-bootstrap

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Plain text (no link) for the brand */}
        <Navbar.Brand className="font-weight-bold text-white">
          E-Commerce Shop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
```


---

### **Error Handling:**

- Error handling mechanisms are included to gracefully manage errors such as API failures, invalid form inputs, and network issues.
- Informative error messages are displayed to users in case of any issues.

```

 const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!order.customerName || !order.productId || !order.quantity) {
      setError('Please fill all fields');
      return;
    }

    // Check if customer exists
    const savedCustomers = JSON.parse(localStorage.getItem('customers')) || [];
    const customer = savedCustomers.find((customer) => customer.name === order.customerName);

    if (!customer) {
      setError('Customer not found');
      return;
    }


```
---

### **Resources:**

- [GitHub Repository](https://github.com/)
- [React-Bootstrap](https://react-bootstrap.netlify.app/docs/components/navbar)
- [Markdown](https://www.freecodecamp.org/news/how-to-use-markdown-in-vscode/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Unsplash](https://unsplash.com/)
- [React Patterns on GitHub](https://reactpatterns.com/#state-hoisting)




---

---

### **GitHub Repository:**

- [GitHub Repository](https://github.com/yourusername/ecommerce-project) :floppy_disk:
- The code is regularly committed to the repository, with clear instructions for setup and running the project.
- This README provides a detailed explanation of features and instructions to run the application.

---

### **How to Run the Application :rocket:**

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ecommerce-project.git

