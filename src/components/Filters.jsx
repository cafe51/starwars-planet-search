import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const {
    useFilters,
    useFiltersList,
    handleFilterName,
    handleChangeFilter,
    handleClickFilter,
  } = useContext(StarWarsContext);

  const collumns = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const collumnsToFilter = useFiltersList.map((c) => c.collumnFilter);
  const filteredCollumns = collumns.filter((c) => !collumnsToFilter.includes(c));

  const operators = [
    'maior que',
    'menor que',
    'igual a',
  ];

  console.log(filteredCollumns);

  return (
    <div>
      <div>
        <label htmlFor="nameFilter">
          Nome
          <input
            type="text"
            placeholder="Search"
            value={ useFilters.nameFilter }
            id="nameFilter"
            onChange={ handleFilterName }
            data-testid="name-filter"
          />
        </label>
      </div>
      <div>
        <label htmlFor="column-filter">
          Coluna
          <select
            onChange={ handleChangeFilter }
            value={ useFilters.collumnFilter }
            name="collumnFilter"
            id="column-filter"
            data-testid="column-filter"
          >
            {
              filteredCollumns.map((collumn) => (
                <option
                  key={ collumn }
                  value={ collumn }
                >
                  {collumn}
                </option>))
            }
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparison-filter">
          Operador
          <select
            onChange={ handleChangeFilter }
            value={ useFilters.operatorFilter }
            name="operatorFilter"
            id="comparison-filter"
            data-testid="comparison-filter"
          >
            {
              operators.map((operator) => (
                <option
                  key={ operator }
                  value={ operator }
                >
                  {operator}
                </option>))
            }
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="value-filter">
          <input
            type="number"
            value={ useFilters.valueFilter }
            onChange={ handleChangeFilter }
            name="valueFilter"
            id="value-filter"
            data-testid="value-filter"
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClickFilter }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filters;
