import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const FeaturedProductsSecondPart = () => {
  const cellHeight = 536/3; 
  const navigate = useNavigate();

  // Sample product data
  const products1 = [
    { id: 10, name: "Green Apple", price: 14.99, imageUrl: "/images/green-apple-isolated-white (1).jpg" },
    { id: 11, name: "Orange", price: 14.99, imageUrl: "/images/orange-juicy-ripe-circle-citrus.jpg" },
    { id: 12, name: "Green Latuce", price: 14.99, imageUrl: "/images/white-vegetable-healthy-fresh-natural.jpg" },];
const products2 = [
    { id: 13, name: "Eggplant", price: 14.99, imageUrl: "/images/eggplant.jpg" },
    { id: 14, name: "Red capsicum", price: 14.99, imageUrl: "/images/bell-pepper.jpg" },
    { id: 15, name: "Tomatoes", price: 14.99, imageUrl: "/images/big-red-fresh-tomatoes-wooden-board.jpg" },];
const products3 =[
    { id: 16, name: "Potatoes", price: 14.99, imageUrl: "/images/potato-sack-isolated-white.jpg" },
    { id: 17, name: "Corn", price: 14.99, imageUrl: "/images/corn-isolated.jpg" },
    { id: 18, name: "Fresh couliflower", price: 14.99, imageUrl: "/images/cauliflower-isolated.jpg" },
    
  ];

  return (
    <section style={{ marginTop: '50px' }} className="flex-container">
      {/* First Column */}
      <div className="column">
        <div className="header">Hot Deals</div>
        {products1.map(product => (
          <Link to={`/ourstore/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="box" style={{ height: `${cellHeight}px` }}>
              <div className="cell-content">
                <img style={{ height: '100px', width: '100px' }} src={product.imageUrl} alt={product.name} />
                <div className="text-content">
                  <p style={{ color: 'black' }}>{product.name}</p>
                  <p style={{ color: 'black' }}>${product.price}</p>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Second Column */}
      <div className="column">
        <div className="header">Best Seller</div>
        {products2.map(product => (
          <Link to={`/ourstore/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="box" style={{ height: `${cellHeight}px` }}>
              <div className="cell-content">
                <img style={{ height: '100px', width: '100px' }} src={product.imageUrl} alt={product.name} />
                <div className="text-content">
                  <p style={{ color: 'black' }}>{product.name}</p>
                  <p style={{ color: 'black' }}>${product.price}</p>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Third Column */}
      <div className="column">
        <div className="header">Top Rated</div>
        {products3.map(product => (
          <Link to={`/ourstore/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
            <div className="box" style={{ height: `${cellHeight}px` }}>
              <div className="cell-content">
                <img style={{ height: '100px', width: '100px' }} src={product.imageUrl} alt={product.name} />
                <div className="text-content">
                  <p style={{ color: 'black' }}>{product.name}</p>
                  <p style={{ color: 'black' }}>${product.price}</p>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                  <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Fourth Column */}
      <div className="column" style={{ position: 'relative' }}>
        <img src="/images/bag-full-vegetables.jpg" width="400" height="580" alt="fruit image" />
        <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Poppins', fontSize: '14px', color: 'black' }}>SUMMER SALE</p>
          <p style={{ fontSize: '30px', lineHeight: '1.5', color: 'green' }}>75% Off</p>
          <button onClick={() => navigate('/ourstore/tag/All')} style={{ backgroundColor: 'yellow', color: 'black', padding: '10px 20px', borderRadius: '25px', marginTop: '5px', border: '2px solid white', position: 'relative' }}>
            Shop Now
            <span style={{ marginLeft: '5px', color: 'black', fontSize: '18px' }}>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSecondPart;
