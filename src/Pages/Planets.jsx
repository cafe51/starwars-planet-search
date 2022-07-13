import React from 'react';
import Filters from '../components/Filters';
import TablePlanets from '../components/TablePlanets';

function Planets() {
  // const [usePlanets, setPlanets] = useState([]);
  // const [useFilter, setFilter] = useState({
  //   nameFilter: '',
  // });

  // useEffect(() => {
  //   async function fetchdata() {
  //     const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //     const response = await fetch(url);
  //     const { results } = await response.json();
  //     const filteredResults = results
  //       .filter((result) => (result.name.toLowerCase().includes(useFilter.nameFilter)));
  //     setPlanets(filteredResults);
  //     console.log(results);
  //   }
  //   fetchdata();
  // }, [useFilter]);

  // const handleFilterName = (name) => {
  //   setFilter({
  //     ...useFilter,
  //     nameFilter: name,
  //   });
  // };

  return (
    <div>
      <Filters />
      <TablePlanets />
    </div>
  );
}

export default Planets;
