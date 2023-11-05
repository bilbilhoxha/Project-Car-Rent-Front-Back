import React, { useState, useEffect } from 'react';
import './home.css';
import productImage1 from '../components/assets/product_1.png';
import productImage2 from '../components/assets/product_2.png';
import productImage3 from '../components/assets/product_3.png';

const Home = () => {
  const images = [productImage1, productImage2, productImage3];
  const [currentImage, setCurrentImage] = useState(0);

  // Function to automatically advance the slider
  const autoAdvance = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  useEffect(() => {
    // Automatically advance the slider every 3 seconds (adjust as needed)
    const intervalId = setInterval(autoAdvance, 3000);

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentImage]);

  return (
    <div className="home">
      <header>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover a wide range of products for every need.</p>
      </header>
      <section>
        <h2>Featured Products</h2>
        <div className="slider">
          <div className="slider-content" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="slider-item">
                <img src={image} alt={`Product ${index + 1}`} className="slider-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="info">
       
          <p>
            Additional content goes here. You can add more paragraphs, images, or any other elements you need.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sem non dolor lobortis, nec
            consectetur arcu tincidunt. Proin elementum sapien ut lacus viverra eleifend.
          </p>
          <p>
            Additional content goes here. You can add more paragraphs, images, or any other elements you need.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
