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

  const [useFiltersList, setFiltersList] = useState([]);

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

  const setFilterListFunction = (value) => {
    setFiltersList(
      [...useFiltersList.filter((filter) => (filter.collumnFilter !== value))],
    );
  };

  const collumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const collumnsToFilter = useFiltersList.map((c) => c.collumnFilter);
  const filteredCollumns = collumns.filter((c) => !collumnsToFilter.includes(c));
  // const collumnValue = document.getElementById('column-filter');

  const handleClickFilter = () => {
    // console.log('ANTES', usePlanets);
    // setPlanets(useStandardPlanets);
    // .filter((result) => (result.name.toLowerCase().includes(useFilters.nameFilter))));
    // const newPlanets = usePlanets;
    // console.log(useStandardPlanets);
    setFiltersList(useFiltersList.concat([useFilters]));
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
    setFilter({
      ...useFilters,
      collumnFilter: filteredCollumns
        .filter((f) => useFilters.collumnFilter !== f)[0],
    });
  };

  const context = {
    useFilters,
    usePlanets,
    useFiltersList,
    handleFilterName,
    handleChangeFilter,
    handleClickFilter,
    setFilterListFunction,
    filteredCollumns,
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
