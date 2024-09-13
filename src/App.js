import React from 'react';
import './App.css'; // Import the stylesheet for styling the App component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome for icon fonts

// URL of the sofa image used in the component
const sofaImage = 'https://i.pinimg.com/564x/50/c2/22/50c22267ee8afc9bfe0b2df7e8984074.jpg';

function App() {
  return (
    <div className="App">
      {/* Main container for the layout with flexible sections */}
      <div className="container">
        {/* Left side of the container holding product information */}
        <div className="left-side">
          {/* Section for navigation text with icons */}
          <div className="text-list">
            {/* Navigation text with icons */}
            <p>
              <span role="img" aria-label="link">🔗</span>&nbsp;CAPSULE&nbsp;&nbsp;SOFA&nbsp;&nbsp;TABLE&nbsp;&nbsp;CHAIR
            </p>
          </div>
          <div>
            {/* Product title and description */}
            <p className="product-title">Sofa</p>
            <p className="product-description grey-text">Brown</p>
          
            {/* Product details */}
            <p><strong>Pasadena Sofa</strong></p>
            <p>Two USB ports bring the sofa into the 21st</p>
            <p>century allowing you to easily charge your phone</p>
            <p>and tablet while you relax.</p>

            {/* Button container with pricing and payment options */}
            <div className="button-container">
              <div className="white-button">$399</div> {/* Price button */}
              <div className="black-button">Pay for</div> {/* Payment button */}
            </div>

            {/* Social media icons for sharing or linking */}
            <div className="social-icons">
              {/* Google social media link */}
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google">
                <i className="fab fa-google"></i>
              </a>
              {/* Twitter social media link */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              {/* Facebook social media link */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right side of the container holding image and additional information */}
        <div className="right-side">
          {/* Search container with an icon */}
          <div className="search-container">
            <span>Search </span><i className="fas fa-search"></i>
          </div>

          {/* Container for sofa image and decorative elements */}
          <div className="cream-container">
            <div className="grey-container">
              {/* Caption for the image */}
              <p className="grey-text">CAPSULE</p>
              {/* Image of the sofa */}
              <img src={sofaImage} alt="Sofa" />
              {/* Decorative love emoji */}
              <div className="love-emoji">&#x1F497;</div>
            </div>
            {/* Dimensions of the sofa */}
            <p>2m / 2.4m / 2.7m / 3.2m</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

