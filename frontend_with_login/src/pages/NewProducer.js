import React from 'react';
import { Link } from 'react-router-dom';

const NewestProduct = () => {
    const cellHeight = 536 / 3;
    const featuredProducts = [
      { id: 5, name: 'Apple', imageUrl: '/images/gala-apple-1_1.png', price: '$2.99' },
      { id: 6, name: 'Vegetables', imageUrl: '/images/fresh-healthy-raw-vegetables-tray-white-background.jpg', price: '$2.99' },
      {id:7, name: 'Ginger',imageUrl:'/images/240_F_627167800_XG8OaUtP06mA760VF9mguhYJo3CVDOAf.jpg', price: '$2.99' },
      {id:8, name: 'Mushrooms ',imageUrl:'/images/240_F_661545048_HUkpRiaKau63BR6NsiFXM63WHPCacX3n.jpg', price: '$2.99' },
      {id:9, name: 'Corns',imageUrl:'/images/240_F_707096425_agtmjj02B8If8LjqvaH9oTK9awfMTgRG.jpg', price: '$2.99' },
    
  ];
  return (

    <div className='my-12 px-4 lg:px-24'>
      <div className='container-xxl'>
        <div className='row'>
        <div className='d-flex flex-wrap justify-content-between'>
            {featuredProducts.map(product => (
                  <div key={product.id} className='col mb-4' style={{ maxWidth: '20%' }}>
                    <Link to={`/ourstore/${product.id}`}>
                      <div className="product-item" >
                        <div style={{ width: 248, height: 339, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
                          <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
                            <img src={product.imageUrl} alt={product.name} style={{ width: 246, height: 246 }} />
                              <div style={{ padding: '16px', textAlign: 'left', fontSize: '14px', marginTop: 'auto' }}>
                                <p className="text-xl font-bold mb-2" style={{ color: 'black' }}>{product.name}</p>
                                  <p className="text-base text-gray-500" style={{ color: 'black' }}>{product.price}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </Link>
                  </div>
                ))}
                </div>
            </div>
            </div>
 

      <Link to="/ourstore" className='text-green-700'>
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
