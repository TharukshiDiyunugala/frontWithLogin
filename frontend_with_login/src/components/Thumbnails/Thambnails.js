import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../Price/Price';
import classes from './thumbnails.module.css';

const Thambnails = ({ products }) => {
  return (
    <ul className={classes.list}>
      {products.map(product => (
        <li key={product.id} className={classes.item}>
          <Link to={`/ourstore/${product.id}`} className={classes.link}>
            <div className={classes.thumbnailWrapper}>
              <img
                className={classes.image}
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className={classes.content}>
              <div className={classes.name}>{product.name}</div>
              <div className={classes.price}>
                <Price price={product.price} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Thambnails;
