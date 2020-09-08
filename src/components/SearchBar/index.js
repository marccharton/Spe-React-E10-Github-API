// == Import npm
import React, { useEffect } from 'react';

// == Import
// import './styles.css';

const SearchBar = ({search, launchSearch, setSearch}) => {
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log("wesh");
    console.log(e);
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      launchSearch();
    }
  };

  return (
    <div> 
      <input type="text" 
             value={search} 
             placeholder="search" 
             onChange={handleChange}
             onKeyDown={handleKeyDown}
             />
    </div>
  );
};

export default SearchBar;
