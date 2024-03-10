import React from 'react';
import { Link } from 'react-router-dom';

const NewestProduct = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 style={{ marginTop: '50px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '46px' }} 
      className='text-5xl font-bold text-center mb-10 leading-snug'>Newest Product</h2>

            <div className='container-xxl'>
            
              <div className='row'>
                <div className='col-20 '>
                  <div className='services d-flex align-items-center justify-content-between'>
                  <div className="product-item" style={{flex:0}}>
          <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/gala-apple-1_1.png" alt="Green Apple" style={{ width: 246, height: 246 }} />
              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Green Apple</p>
                <p className="text-base text-gray-500">$2.99</p>
              </div>
            </div>
          </div>
        </div>

        <div className="product-item" style={{flex:0}}>
          <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/fresh-healthy-raw-vegetables-tray-white-background.jpg" alt="Green Apple" style={{ width: 246, height: 246 }} />
              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">vegetables</p>
                <p className="text-base text-gray-500">$2.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item" style={{flex:0}}>
          <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/240_F_627167800_XG8OaUtP06mA760VF9mguhYJo3CVDOAf.jpg" alt="Green Apple" style={{ width: 246, height: 246 }} />
              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Ginger</p>
                <p className="text-base text-gray-500">$2.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item" style={{flex:0}}>
          <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/240_F_661545048_HUkpRiaKau63BR6NsiFXM63WHPCacX3n.jpg" alt="Green Apple" style={{ width: 246, height: 246 }} />
              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Mushrooms</p>
                <p className="text-base text-gray-500">$2.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-item" style={{flex:0}}>
          <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/240_F_707096425_agtmjj02B8If8LjqvaH9oTK9awfMTgRG.jpg" alt="Green Apple" style={{ width: 246, height: 246 }} />
              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Corn</p>
                <p className="text-base text-gray-500">$2.99</p>
              </div>
            </div>
          </div>
        </div>
       
     
      </div>
      
  </div>
  </div>
  </div>

      <Link to="/shop" className='text-green-700'>
        <button
          style={{
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: '#34D399',
            padding: '8px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            
          }}
          className='font-semibold rounded hover:bg-green-700 hover:text-white transition-all duration-300 ml-auto'
        >
          View all...
        </button>
      </Link>
    </div>
  );
}

export default NewestProduct;
