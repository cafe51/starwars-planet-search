import React, { useEffect, useState } from 'react';
import TablePlanets from '../components/TablePlanets';

function Planets() {
  const [usePlanets, setPlanets] = useState([]);
  const [useSearchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchdata() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      const filteredResults = results
        .filter((result) => (result.name.toLowerCase().includes(useSearchText)));
      setPlanets(filteredResults);
      console.log(results);
    }
    fetchdata();
  }, [useSearchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={ useSearchText }
        onChange={ ({ target }) => setSearchText(target.value) }
        data-testid="name-filter"
      />
      <TablePlanets planets={ usePlanets } />
    </div>
  );
}

export default Planets;
