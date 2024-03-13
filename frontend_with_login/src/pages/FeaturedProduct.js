import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedProduct = () => {
    const cellHeight = 536 / 3;
  return (
    <div className='my-12 px-4 lg:px-24'>
      
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
  <section style={{ marginTop: '50px' }} className="flex-container">
      {/* First Column */}
      <div className="column">
        <div className="header">Hot Deals</div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'100px',width:'100px'}}src="/images/green-apple-isolated-white (1).jpg" alt="Right side image" />
            <div className="text-content">
              <p>Green Apple</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'100px',width:'110px'}}src="/images/orange-juicy-ripe-circle-citrus.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Orange</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'90px',width:'110px'}}src="/images/white-vegetable-healthy-fresh-natural.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Green Latuce</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
      </div>

      {/* Second Column */}
      <div className="column">
        <div className="header">Best Seller</div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'90px',width:'110px'}}src="/images/eggplant.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Eggplant</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div> 
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'80px',width:'110px'}}src="/images/bell-pepper.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Red capsicum</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'100px',width:'120px'}}src="/images/big-red-fresh-tomatoes-wooden-board.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Tomatoes</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
      </div>

      {/* Third Column */}
      <div className="column">
        <div className="header">Top Rated</div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'90px',width:'110px'}}src="/images/potato-sack-isolated-white.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Potatoes</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'90px',width:'110px'}}src="/images/corn-isolated.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Corn</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
        <div className="box" style={{ height: `${cellHeight}px` }}>
        <div className="cell-content">
        <img style={{height:'100px',width:'110px'}}src="/images/cauliflower-isolated.jpg" alt="Right side image" />
            <div className="text-content">
              <p>Fresh couliflower</p>
              <p>$14.99</p>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
              <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#11088;</span>
            </div>
        </div>
        </div>
      </div>

      {/* Fourth Column */}
      <div className="column" style={{ position: 'relative' }}>
      
        <img src="/images/bag-full-vegetables.jpg" width="400" height="580" alt="fruit image" />
        <div style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
          <p style={{ fontSize: '24px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Poppins', fontSize: '14px',color: 'black' }}>SUMMER SALE</p>
          <p style={{ fontSize: '30px', lineHeight: '1.5',color: 'green' }}>75% Off</p>
          <button onClick={() => window.location.href = '/ourstore/tag/All'} style={{ backgroundColor: 'yellow', color: 'black', padding: '10px 20px', borderRadius: '25px', marginTop: '5px', border: '2px solid white', position: 'relative' }}>
            Shop Now
            <span style={{ marginLeft: '5px', color: 'black', fontSize: '18px' }}>&#8594;</span>
          </button>
        </div>
      </div>
    </section>

      
    </div>
    
  );
  
}

export default FeaturedProduct