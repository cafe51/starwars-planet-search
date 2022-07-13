import React, { useEffect, useState } from 'react';
import TablePlanets from '../components/TablePlanets';

function Planets() {
  const [usePlanets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const response = await fetch(url);
      const { results } = await response.json();
      setPlanets(results);
      console.log(results);
    }
    fetchdata();
  }, []);

  return (
    <div>
      <TablePlanets planets={ usePlanets } />
    </div>
  );
}

export default Planets;
