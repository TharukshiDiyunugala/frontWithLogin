import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout'


const aboutUs = () => {
  return (
    <Layout >
      <div className='container-fluid'>
        <div className='row'>
          
          <div className='col-12 col-md-8'>
            <div className='mt-5 px-4'>
              <h4 className='text-3xl font-bold text-left'>Who We Are</h4>
              <p className='text-justify'>
              LuxeMart is your premier destination for quality products and shopping convenience. We pride ourselves on being the go-to platform for customers seeking the finest goods and exceptional shopping experiences. Launched with a commitment to excellence, LuxeMart has been serving customers since [Year of Launch].
              </p>
              <h4 className='text-3xl font-bold text-left'>A Few Things You Can Do On LuxeMART</h4>
              <p className='text-justify'>
              Explore LuxeMart to discover a world of shopping possibilities. Keep track of the products you're interested in, have purchased, or plan to buy. Our personalized recommendation system, fueled by advanced analytics processing over 20 billion data points, offers tailored suggestions to suit your preferences. Uncover the perfect fit for your needs with insights from our community reviews.
             </p>
              <h4 className='text-3xl font-bold text-left'>A Message From Our Co-Founder</h4>
              <p className='text-justify'>
                From my early days, I found joy in discovering the diverse offerings at LuxeMart. The exploration of products became a passion, a journey to enhance not only my lifestyle but also to enrich my understanding. Always on the lookout for the next remarkable find, one day, as I perused a friend's shopping choices, it dawned on me. When it comes to deciding what to buy, I'd prefer insights from a friend over random suggestions or bestseller lists.
                </p>
                <p className='text-justify'>
                    This realization led me to create a platform – a digital space where I could explore my friends' favorite products and learn about their experiences. My co-founder, Elizabeth, crafted the engaging content, while I brought the vision to life with the code. The journey began in my living room, fueled by the belief that there was a superior way to discover and discuss premium products. LuxeMart emerged as that platform, where you can see what your friends are purchasing and share your own finds. Create virtual "shopping shelves" to curate your collection, leave comments on each other's choices, and uncover your next favorite item.
                </p>
                <p className='text-justify'>
                Join us on this shopping expedition with your friends, exploring new products, gathering insights, and expanding your preferences. At LuxeMart, we believe that knowledge about quality products is empowering, and this empowerment is best enjoyed when shared among shoppers.
                </p>
            </div>
          </div>
          
          
          <div className='col-12 col-md-4 '>
            <img
            style={{marginTop: '150px'}}
              src='/images/240_F_714804028_Dwb4ijnlRL2lq6AA0szZ3KAzIVPHDInn.jpg'
              alt="My Image"
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default aboutUs