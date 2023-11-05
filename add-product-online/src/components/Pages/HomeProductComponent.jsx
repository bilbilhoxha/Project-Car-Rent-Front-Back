import React, { useState, useEffect } from 'react';
import './HomeProductComponent.css';
//import productImage1 from '../images/product_1.png'; // Import your product images
//import productImage2 from '../images/product_2.png'; // Import additional images as needed
//import productImage3 from '../images/product_3.png'; // Import additional images as needed

const HomeProductComponent = () => {
  const [currentImage, setCurrentImage] = useState(1);

  // Define your list of images
  const images = [productImage1, productImage2, productImage3];

  useEffect(() => {
    // Automatically change the slider every 3 seconds
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage % 3) + 1);
    }, 3000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home-products">
      {/* Slider Section */}
      <div className="slider-container">
        <div className="slider">
          <img src={images[currentImage - 1]} alt={`Smartwatch ${currentImage}`} />
        </div>
      </div>

      {/* Introduction Section (moved down) */}
      <div className="intro">
        <h1>Welcome to the Smartwatches Store</h1>
        <div className="paragraph">
          <p>Discover the latest and greatest smartwatches for your active lifestyle.</p>
          <p>Stay connected, track your fitness, and more with our premium selection of smartwatches.</p>
          <p>Explore our collection and find the perfect smartwatch to suit your needs.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeProductComponent;
