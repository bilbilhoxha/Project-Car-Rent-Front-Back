import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './car.css';

import productImage1 from '../components/assets/product_1.png';
import productImage2 from '../components/assets/product_2.png';
import productImage3 from '../components/assets/product_3.png';
import productImage4 from '../components/assets/product_4.png';
import productImage5 from '../components/assets/product_5.png';
import productImage6 from '../components/assets/product_6.png';
import productImage7 from '../components/assets/product_7.png';
import productImage8 from '../components/assets/product_8.png';
import productImage9 from '../components/assets/product_9.png';
import productImage10 from '../components/assets/1.jpeg';
const ShopCategory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-category">
      {products.map((product, index) => (
        <div key={product.id} className="product">
          {index === 0 && <img src={productImage1} alt={product.productName} />}
          {index === 1 && <img src={productImage2} alt={product.productName} />}
          {index === 2 && <img src={productImage3} alt={product.productName} />}
          {index === 3 && <img src={productImage4} alt={product.productName} />}
          {index === 4 && <img src={productImage5} alt={product.productName} />}
          {index === 5 && <img src={productImage6} alt={product.productName} />}
          {index === 6 && <img src={productImage7} alt={product.productName} />}
          {index === 7 && <img src={productImage8} alt={product.productName} />}
          {index === 8 && <img src={productImage9} alt={product.productName} />}
          {index === 9 && <img src={productImage10} alt={product.productName} />}
          <h3>{product.productName}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <Link to="/contact">
            <button className="button">
              <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text">Contact us</span>
              </span>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShopCategory;
