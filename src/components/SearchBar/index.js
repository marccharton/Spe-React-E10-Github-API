// == Import npm
import React, { useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Input } from 'semantic-ui-react';

// == Import
import './styles.scss';

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
    <div className="searchBar"> 
      <Input className="searchBar__input"
             type="text" 
             value={search} 
             placeholder="search" 
             onChange={handleChange}
             onKeyDown={handleKeyDown}
             icon='search'
          />
    </div>
  );
};

export default SearchBar;
