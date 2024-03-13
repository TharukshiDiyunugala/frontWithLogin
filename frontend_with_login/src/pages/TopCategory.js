import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={2}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        initialSlide={4}
      >
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/pile-fresh-vegetables.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Vegetables</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">165 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/pile-fresh-fruits.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Fresh Fruits</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">137 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/red-tilapia.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">River Fish</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">37 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/raw-steak-white-paper.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Meat</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">147 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/lemonade-drink-jar-glass-ingredients-isolated-white-background.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Water and Drinks</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">47 products</p>
                </div>
              </div>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/flat-lay-assortment-with-salty-fruits.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Snacks</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">157 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/pile-fresh-vegetables.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Vegetables</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">165 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/pile-fresh-fruits.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Fresh Fruits</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">137 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/red-tilapia.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">River Fish</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">37 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/raw-steak-white-paper.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Meat</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">147 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/lemonade-drink-jar-glass-ingredients-isolated-white-background.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Water and Drinks</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">47 products</p>
                </div>
              </div>
            </div>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ width: 200, height: 200, position: 'relative', background: 'white', borderRadius: 8, overflow: 'hidden', border: '1px #E6E6E6 solid' }}>
            <div style={{ padding: 1, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-center', display: 'inline-flex', flexDirection: 'column', height: '100%' }}>
              <img src="/images/flat-lay-assortment-with-salty-fruits.jpg" alt="Green Apple" style={{ width: 180, height: 180 }} />
              <div style={{ padding: '16px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }}>
                <p className="text-xl font-bold mb-2">Snacks</p>
                <div style={{fontSize:'10px'}}>
                <p className="text-base text-gray-500">157 products</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <section style={{ marginTop: '100px' }}>
  <div className='container'>
    <div className='row justify-content-between'>
      <div className='col-md-3 mb-3' style={{ position: 'relative' }}>
        <img src="/images/wepik-export-20240308163113b0yQ.jpeg" width="400" height="536" alt="veg image"/>
        <div style={{ position: 'absolute', top: '200px', left: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ fontSize: '24px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Poppins', fontSize: '14px' }}>BEST DEALS</p>
          <p style={{ fontSize: '30px', lineHeight: '1.5' }}>Sale of the month</p>
          <button onClick={() => window.location.href = '/shop'} style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '25px', marginTop: '20px', border: '2px solid white', position: 'relative' }}>
            Shop Now
            <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#8594;</span>
          </button>
        </div>
      </div>

      <div className='col-md-3 mb-3' style={{ position: 'relative' }}>
        <img src="/images/pieces-raw-fresh-meat-isolated-black-stone-board-mirrored-side-view.jpg" width="400" height="536" alt="meat image"/>
        <div style={{ position: 'absolute', top: '200px', left: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
          <p style={{ fontSize: '24px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Poppins', fontSize: '14px' }}>85% FAT FREE</p>
          <p style={{ fontSize: '30px', lineHeight: '1.5' }}>Low-Fat Meat</p>
          <button onClick={() => window.location.href = '/shop'} style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '25px', marginTop: '20px', border: '2px solid white', position: 'relative' }}>
            Shop Now
            <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#8594;</span>
          </button>
        </div>
      </div>

      <div className='col-md-3 mb-3'style={{ position: 'relative' }}>
        <img src="/images/wepik-export-20240308164156xczH.jpeg" width="400" height="536" alt="fruit image"/>
        <div style={{ position: 'absolute', top: '200px', left: '60%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'black' }}>
          <p style={{ fontSize: '24px', lineHeight: '1.5', marginBottom: '12px', fontFamily: 'Poppins', fontSize: '14px' }}>SUMMER SALE</p>
          <p style={{ fontSize: '30px', lineHeight: '1.5' }}>100% Fresh Fruits</p>
          <button onClick={() => window.location.href = '/shop'} style={{ backgroundColor: 'white', color: 'black', padding: '10px 20px', borderRadius: '25px', marginTop: '20px', border: '2px solid white', position: 'relative' }}>
            Shop Now
            <span style={{ marginLeft: '5px', color: 'green', fontSize: '18px' }}>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      
    </>
  );
}

