import React from 'react';
import classes from './tags.module.css';
import { Link, useLocation } from 'react-router-dom';

const Tags = ({ tags, forProductPage }) => {
  const location = useLocation();

  return (
    <div
      className={classes.container}
      style={{
        justifyContent: forProductPage ? 'start' : 'center',
      }}
    >
      {tags.map(tag => (
        <Link
          key={tag.name}
          to={`/ourstore/tag/${tag.name}`}
          style={{
            color: location.pathname.includes(tag.name) ? 'green' : 'black', 
            textDecoration: location.pathname.includes(tag.name) ? 'underline' : 'none', 
            fontSize: location.pathname.includes(tag.name) ? '18px' : '14px',
          }}
        >
          {tag.name}
          {/* {!forProductPage && `(${tag.count})`} */}
        </Link>
      ))}
    </div>
  );
};

export default Tags;
