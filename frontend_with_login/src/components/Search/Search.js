import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './search.module.css';

const Search = () => {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();
  const { searchTerm } = useParams();
  

  const handleSearch = async () => {
    term ? navigate('/ourstore/search/' + term) : navigate('/ourstore');
  };

  return (
    <div className={classes.container}>
      <input
        type='text'
        placeholder='Search product Mine!'
        onChange={(e) => setTerm(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
        defaultValue={searchTerm}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
