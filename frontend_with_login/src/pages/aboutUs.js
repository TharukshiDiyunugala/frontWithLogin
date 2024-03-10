
import Layout from '../components/Layout/Layout'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar} from "react-icons/fa6"


const aboutUs = () => {
  return (
    <Layout >
      <div className='container-fluid'>
        <div className='row'>
          
        <section style={{ marginTop: '50px' }}>
  <div className='row'>
    <div className='col-12 col-md-6'>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '56px' ,marginLeft:'150px'}}>100% Trusted </h1>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '56px' ,marginLeft:'150px'}}>Organic Food Store </h1>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', marginTop: '50px',marginLeft:'150px' }}>
        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
        Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros
        non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
      </p>
    </div>

    <div className='col-12 col-md-4'>
      <img
        style={{ marginTop: '20px',marginLeft: '150px' }}
        src='/images/senior-man-working-field-with-chest-vegetables.jpg'
        alt="My Image"
        className='img-fluid'
      />
    </div>
  </div>
</section>
<section style={{ marginTop: '50px', backgroundColor: '#f4f4f4' }}>
  <div className='row'>
  <div className='col-12 col-md-4'>
      <img
        style={{ marginTop: '20px',marginLeft: '150px',marginBottom:'20px' }}
        src='/images/close-up-old-farmer-holding-basket-vegetables-man-is-standing-garden-senior-black-apron.jpg'
        alt="My Image"
        className='img-fluid'
        
      />
    </div>
    <div className='col-12 col-md-8'>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '46px' ,marginLeft:'250px',marginTop:'20px'}}>100% Trusted </h1>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '46px' ,marginLeft:'250px'}}>Organic Food Store </h1>
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', marginTop: '50px',marginLeft:'250px' }}>
        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
        Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros
        non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
      </p>
    </div>

    
  </div>
</section>
<section style={{ marginTop: '50px' }}>
  <div className='row'>
    <div className='col-12 col-md-6'>
      <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '48px' ,marginLeft:'150px'}}>We Delivered, You Enjoy Your Order.</h1>
      
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', marginTop: '50px',marginLeft:'150px' }}>
        Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros.
        Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros
        non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.
      </p>
    </div>

    <div className='col-12 col-md-4'>
      <img
        style={{ marginTop: '20px',marginLeft: '150px',marginBottom: '50px' }}
        src='/images/asian-delivery-man-wearing-red-uniform-holding-fresh-food-basket-isolated-white-wall.jpg'
        alt="My Image"
        className='img-fluid'
      />
    </div>
  </div>
</section>
<section>
<h2 style={{ marginTop: '50px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '46px' }} className='text-5xl font-bold text-center mb-10 leading-snug'>Our Awesome Team</h2>
<p style={{ marginTop: '10px', fontFamily: 'Poppins, sans-serif', fontWeight: 'regular', fontSize: '16px' }}className='text-5xl font-bold text-center mb-10 leading-snug'>
Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.
</p>
<div>
<section >
  <div className='container'>
    <div className='row'>
      
    </div>

    <div className='row mt-4'>
    <div className='col-6 col-md-3 text-center'>
  <div className='box'>
    <img
      src='/images/download.jpeg'
      alt='Box Image'
      className='img-fluid'
      style={{ marginBottom: '10px' }}
    />
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
    Jenny Wilson
    </p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px' }}>
    Co-Founder
    </p>

  </div>
</div>

      <div className='col-6 col-md-3 text-center'>
        <div className='box'>
        <img
      src='/images/download (1).jpeg'
      alt='Box Image'
      className='img-fluid'
      style={{ marginBottom: '10px' }}
    />
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
    Jenny Wilson
    </p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px' }}>
    Co-Founder
    </p>

        </div>
      </div>
      <div className='col-6 col-md-3 text-center'>
        <div className='box'>
        <img
      src='/images/download (2).jpeg'
      alt='Box Image'
      className='img-fluid'
      style={{ marginBottom: '10px' , height: '178px' }}
    />
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
    Jenny Wilson
    </p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px' }}>
    Co-Founder
    </p>

        </div>
      </div>
      <div className='col-6 col-md-3 text-center'>
        <div className='box'>
        <img
      src='/images/images.jpeg'
      alt='Box Image'
      className='img-fluid'
      style={{ marginBottom: '10px' }}
    />
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>
    Jenny Wilson
    </p>
    <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px' }}>
    Co-Founder
    </p>

        </div>
      </div>
    </div>

    
  </div>
</section>

  
</div>

</section>
<section style={{marginTop:'50px'}}>
<section style={{backgroundColor: '#f4f4f4',marginTop:'50px'}}>
<section style={{ marginTop: '40px',marginBottom:'50px' }}>
<h2 style={{ marginTop: '50px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', fontSize: '46px' }} 
className='text-5xl font-bold text-center mb-10 leading-snug'>Client Testimonial</h2>

      
      </section>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                        
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />


                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>

        
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit error cupiditate minima dolorum debitis, 
                        provident doloribus. Possimus est maiores et autem, aliquam aspernatur obcaecati libero, dolorem necessitatibus 
                        consequatur placeat unde.</p>
                   
                        <img src="/images/profile.jpg" alt='Instagram Pic 1' 
                        style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%' }} />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CEO, ABC company</p>
                    </div>
      
            
                </div>
                <section style={{ marginTop: '40px' }}>
      
      </section>


        
        </SwiperSlide>
        
      </Swiper>
        </div>
   
          
          
        
</section>
</section>
      
      </div>
      </div>
    </Layout>
  );
};


export default aboutUs