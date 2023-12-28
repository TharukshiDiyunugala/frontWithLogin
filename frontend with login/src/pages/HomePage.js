import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Layout title="LuxeMART - Best Offers">
        <section className='home-wrapper-1 py-2 position-relative'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12 col-md-8'>
                <div className='main-banner position-relative'>
                  <img
                    src="/images/Supermarket_web.jpg"
                    className=" rounded-3"
                    alt='main banner' style={{ width: '120%', marginLeft: '-60px', height: '600px' }}
                  />
                  <div className='container-xl'>
                    <div className='main-banner-content position-absolute '>
                      <h3>Fresh & Healthy <br /> Organic Food</h3>
                      <h5>Sale up to <span className="discount">30% OFF</span></h5>
                      <Link to='/shop-route' className='button button-outline-success'>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-10 col-md-4'>
                <div className='small-banner-container'>
                  <div className='small-banner position-relative p-3'>
                    <img
                      src="/images/Supermarket_web5.jpg"
                      className="img-fluid rounded-1"
                      alt='small banner' style={{ height: '275px', width: '500px' }}
                    />

                  </div>
                  <div className='small-banner position-relative p-2'>
                    <img
                      src="/images/Supermarket_web3.jpg"
                      className="img-fluid rounded-1"
                      alt='small banner' style={{ height: '275px', width: '500px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='home-wrapper-3 py-2 margin-wrapper-3' >
            <div className='container-xxl'>
              <div className='row'>
                <div className='col-12 '>
                  <div className='services d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/service-02.png' alt="services" />
                      <div>
                        <h6>Daily Surprise Offers</h6>
                        <p className='mb-0'>Save upto 25% off</p>
                      </div>
                    </div>

                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/service-03.png' alt="services" />
                      <div>
                        <h6>Support 24/7</h6>
                        <p className='mb-0'>Shop with an expert</p>
                      </div>
                    </div>

                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/service-04.png' alt="services" />
                      <div>
                        <h6>Affordable Prices</h6>
                        <p className='mb-0'>Get Factory Default Price</p>
                      </div>
                    </div>

                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/service-01.png' alt="services" />
                      <div>
                        <h6>Secure Payments</h6>
                        <p className='mb-0'>100% Protected Payment</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </Layout>
    </>
  );
}

export default HomePage;
