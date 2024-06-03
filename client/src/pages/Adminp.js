// AdminProductForm.js
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Layout from "./../components/Layout";

const Adminp = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleAddProduct = () => {
    // Ensure all fields are filled before adding the product
    if (product.name && product.price && product.description && product.image) {
      onAddProduct({
        ...product,
        id: Math.floor(Math.random() * 1000) + 1 // Generate a random ID
      });
      // Clear the form fields after adding the product
      setProduct({
        id: '',
        name: '',
        price: '',
        description: '',
        image: ''
      });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (

    <Layout>

    <div className="admin-product-form">
      <h2>Add Product</h2>
      <Input placeholder="Product Name" name="name" value={product.name} onChange={handleChange} />
      <Input placeholder="Price" name="price" value={product.price} onChange={handleChange} />
      <Input.TextArea placeholder="Description" name="description" value={product.description} onChange={handleChange} />
      <Input placeholder="Image URL" name="image" value={product.image} onChange={handleChange} />
      <Button type="primary" onClick={handleAddProduct}>Add Product</Button>
    </div>
    </Layout>
  );
};

export default Adminp
