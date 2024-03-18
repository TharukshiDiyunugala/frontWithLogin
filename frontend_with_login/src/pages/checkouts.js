import React, { useState } from 'react';
import Layout from '../components/Layout/Layout.js';

const Checkouts = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expireDate: '',
    cvc: ''
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(cardDetails);
  
    setPaymentSuccess(true);
  };

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
          {!paymentSuccess ? (
            <form onSubmit={handleSubmit}>
                 <img src="/images/240_F_407446284_KBEUJeBQWXwrPwRB7vh0CdAzT9VmXori.jpg" alt="payment methode" style={{ width: 200, height: 50, marginLeft:'35px' }}/>
              <div style={{ marginBottom: '20px',marginTop:'20px' }}>
             
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleChange}
                  maxLength={16} 
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="expireDate">Expiration Date:</label>
                <input
                  type="text"
                  id="expireDate"
                  name="expireDate"
                  value={cardDetails.expireDate}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  maxLength={5} 
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="cvc">CVV/CVC:</label>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={cardDetails.cvc}
                  onChange={handleChange}
                  maxLength={3} 
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '14px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Submit</button>
            </form>
          ) : (
            <p>Your payment is successful!</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Checkouts;
