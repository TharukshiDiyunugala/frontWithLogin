import React, { useEffect, useState } from 'react';
import BreadcrumbItem from '../components/BreadCrumb';
import { useParams } from 'react-router-dom';
import { getById } from './OurStore';
import classes from './SingleProduct.module.css';
import StarRating from '../components/StarRating/StarRating'
import Price from '../components/Price/Price';
import NewProducer from './NewProducer';
import Footer from '../components/Layout/Footer';

const SingleProduct = () => {

  const [product, setproduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getById(id).then(setproduct);
  }, [id]);


  return (
    <>
    
      <BreadcrumbItem title="Product Name" />
      { product && <div className={classes.container}>
        <img className={classes.image}
        src={product.imageUrl} 
        alt={product.name}
        />

        <div className={classes.details}>
          <div className={classes.header}>
            <span className={classes.name}>{product.name}</span>
            <span className={`${classes.favorite} ${product.favorite? '':classes.not}`}>
            ❤
            </span>
          </div>
          <div className={classes.rating}>
              <StarRating stars={product.stars} size={25} />
            </div>
           
           <div className={classes.brand}>
           <h5>Brand : </h5>
              {product.brand?.map(brand => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
            <div className={classes.describtion}>{product.describtion}</div>
            <div className={classes.unit}>{product.unit}</div>
            
            <div className={classes.price}>
              <Price price={product.price} />
              <span>/Unit</span>
            </div>
          
            <button>
            <img src="/images/cart.svg" alt="cart" className="align-self-center" style={{ inlineSize: '35px', blockSize: '35px',marginRight: '10px' }} />
            Add To Cart
            </button>
        </div>
      </div>
      }
    
      <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='review-head'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
         
          <div className='row'>
            <NewProducer />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default SingleProduct;
