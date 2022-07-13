import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [useStandardPlanets, setStandardPlanets] = useState([]);
  const [usePlanets, setPlanets] = useState([]);
  const [useFilters, setFilter] = useState({
    nameFilter: '',
    collumnFilter: 'population',
    operatorFilter: 'maior que',
    valueFilter: 0,
  });

  useEffect(() => {
    async function fetchdata() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      // const filteredResults = results
      //   .filter((result) => (result.name.toLowerCase().includes(useFilters.nameFilter)));
      setStandardPlanets(results);
      setPlanets(results);
      // console.log(results);
    }
    fetchdata();
  }, []);

  const handleFilterName = ({ target }) => {
    setFilter({
      ...useFilters,
      nameFilter: target.value,
    });
    // const filteredResults =
    setPlanets(useStandardPlanets
      .filter((result) => (result.name.toLowerCase().includes(target.value))));
  };

  const handleChangeFilter = ({ target }) => {
    setFilter({
      ...useFilters,
      [target.name]: target.value,
    });
  };

  const handleClickFilter = () => {
    // console.log('ANTES', usePlanets);
    // setPlanets(useStandardPlanets);
    // .filter((result) => (result.name.toLowerCase().includes(useFilters.nameFilter))));
    // const newPlanets = usePlanets;
    // console.log(useStandardPlanets);
    if (useFilters.operatorFilter === 'maior que') {
      setPlanets(usePlanets
        .filter((result) => (
          Number(result[useFilters.collumnFilter]) > Number(useFilters.valueFilter)
        )));
    } else if (useFilters.operatorFilter === 'menor que') {
      setPlanets(usePlanets
        .filter((result) => (
          Number(result[useFilters.collumnFilter]) < Number(useFilters.valueFilter)
        )));
    } else if (useFilters.operatorFilter === 'igual a') {
      setPlanets(usePlanets
        .filter((result) => (
          Number(result[useFilters.collumnFilter]) === Number(useFilters.valueFilter)
        )));
    }
    console.log('DEPOIS', usePlanets);
  };

  const context = {
    useFilters,
    handleFilterName,
    handleChangeFilter,
    handleClickFilter,
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
