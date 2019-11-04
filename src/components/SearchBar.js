import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Filter:</strong>
      <label>
        <input type="checkbox" value="Sportswear" checked={null} onChange={props.changeFilter}/>
        Sportswear
      </label>
      <label>
        <input type="checkbox" value="Tech" checked={null} onChange={props.changeFilter}/>
        Tech
      </label>
      <label>
        <input type="checkbox" value="Finance" checked={null} onChange={props.changeFilter}/>
        Finance
      </label>
      <br/>

      <label>
        <strong>Sort By:</strong>
        <select onChange={props.changeSort}>
          <option value="name">Alphabet</option>
          <option value="price">Price</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
