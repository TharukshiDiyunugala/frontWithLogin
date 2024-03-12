import React, { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
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
      </Swiper>
      
      <section style={{ marginTop: '120px' }}>
  <div className='container'>
    <div className='row justify-content-between'>
      <div className='col-md-3 mb-3'>
        <div style={{ background: 'white', border: '1px #E6E6E6 solid', borderRadius: 8, padding: '16px' }}>
          <p className="text-xl font-bold mb-2">Box 1</p>
          <p className="text-base text-gray-500">$2.99</p>
        </div>
      </div>
      <div className='col-md-3 mb-3'>
        <div style={{ background: 'white', border: '1px #E6E6E6 solid', borderRadius: 8, padding: '16px' }}>
          <p className="text-xl font-bold mb-2">Box 2</p>
          <p className="text-base text-gray-500">$2.99</p>
        </div>
      </div>
      <div className='col-md-3 mb-3'>
        <div style={{ background: 'white', border: '1px #E6E6E6 solid', borderRadius: 8, padding: '16px' }}>
          <p className="text-xl font-bold mb-2">Box 3</p>
          <p className="text-base text-gray-500">$2.99</p>
        </div>
      </div>
    </div>
  </div>
</section>


      
    </>
  );
}

