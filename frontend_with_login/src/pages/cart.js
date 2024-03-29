import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Cart = () => {
  const tableStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '66.66%',
    margin: 'auto',
    marginTop: '50px',
   
  };

  const headerCellStyle = {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    textAlign: 'center',
    fontWeight: '600',
  };

  const cartTotalStyle = {
    width: '30%',
    margin: 'auto',
    marginTop: '50px',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    
    marginTop: '50px',
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Layout>
      <section style={{ marginTop: '20px' }}>
        <div className='my-12 px-4 lg:px-24 '>
          <h2
            style={{
              marginTop: '50px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              fontSize: '46px',
            }}
            className='text-5xl font-bold text-center mb-10 leading-snug'
          >
            My Shopping Cart
          </h2>
        </div>
      </section>
      <section style={{ marginTop: '20px' }}>
        <div style={tableStyle}>
          <div style={headerCellStyle}>Product</div>
          <div style={headerCellStyle}>Price</div>
          <div style={headerCellStyle}>Quantity</div>
          <div style={headerCellStyle}>Subtotal</div>
          <div style={headerCellStyle}></div>
          <div style={headerCellStyle}></div>
          <div style={headerCellStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ margin: '10px' }}>
                <button
                  onClick={decreaseQuantity}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'lightgray',
                    marginRight: '10px',
                    border: '1px solid lightgray',
                  }}
                >
                  -
                </button>
                <span style={{ fontSize: '15px', margin: '0 10px' }}>{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'lightgray',
                    marginLeft: '10px',
                    border: '1px solid lightgray',
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div style={headerCellStyle}></div>
        </div>
      </section>
     
      <section style={cartTotalStyle}>
  <div className='my-12 px-4 lg:px-24'>
    <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.5rem', color: '#333' }}>Cart Total</h3>
    <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>Subtotal:</div>
        <div>$100.00</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>Shipping:</div>
        <div>$10.00</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold' }}>Total:</div>
        <div style={{ fontWeight: 'bold' }}>$110.00</div>
      </div>
    </div>
    <Link to='/checkouts'>
      <button
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: '#00B307',
          borderRadius: '5px',
          color: '#FFFFFF',
          marginTop: '20px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s ease',
        }}
      >
        Proceed to Checkout
      </button>
    </Link>
  </div>
</section>

    </Layout>
  );
};

export default Cart;
