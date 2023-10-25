import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './ShopProductComponent.css';
import axios from 'axios';
import productImage1 from '../images/product_1.png'; // Import your product images
import productImage2 from '../images/product_2.png'; // Import additional images as needed
import productImage3 from '../images/product_3.png'; // Import additional images as needed
import productImage4 from '../images/product_4.png'; // Import productImage4
import productImage5 from '../images/product_5.png'; // Import additional images as needed

const HomeProductComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
     // Fetch product data from an API endpoint
    axios.get('http://localhost:8080/api/products')
      .then((response) => {
        const productData = response.data; // Assuming the response is an array of product data

        setProducts(productData);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="home-products">
      <h1>Welcome to Our Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
           {/*   */}
        {product.id % 4 === 0 ? 

       // keshtu shtojme gjithmone fotot pasrdhese bashke me  importin perkase ne fillim te faqes

        (
          <img src={productImage5} alt={product.productName} className="product-image" />
        ) : product.id % 5 === 0 ?

        // kur duhet te shtojme nje foto tjeter do t ashtojme baske me produkt idt perkatese te fotos tek kllpa mbyllese
      (
  
       <img src={productImage4} alt={product.productName} className="product-image" />
      ) : product.id % 3 === 0 ? 
      
      (
       <img src={productImage3} alt={product.productName} className="product-image" />
      ) : product.id % 2 === 0 ? 

      (
  
        <img src={productImage2} alt={product.productName} className="product-image" />
      ) : 

      (
        <img src={productImage1} alt={product.productName} className="product-image" />
      )}

      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      
      <Link to="/cart" className="add-to-cart-button">Add to Cart</Link>
     
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProductComponent;
