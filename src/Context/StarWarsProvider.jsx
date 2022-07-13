import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [usePlanets, setPlanets] = useState([]);
  const [useFilter, setFilter] = useState({
    nameFilter: '',
  });

  useEffect(() => {
    async function fetchdata() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      const filteredResults = results
        .filter((result) => (result.name.toLowerCase().includes(useFilter.nameFilter)));
      setPlanets(filteredResults);
      console.log(results);
    }
    fetchdata();
  }, [useFilter]);

  const handleFilterName = (name) => {
    setFilter({
      ...useFilter,
      nameFilter: name,
    });
  };

  const context = {
    useFilter,
    handleFilterName,
    usePlanets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
