import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  // return (
  //   <span>{`Olá ${context}`}</span>
  // );
  // console.log();

  const { useFilter, handleFilterName } = useContext(StarWarsContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={ useFilter.nameFilter }
        onChange={ ({ target }) => handleFilterName(target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filters;
