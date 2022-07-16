import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

function Filters() {
  const {
    useFilters,
    useFiltersList,
    handleFilterName,
    handleChangeFilter,
    handleClickFilter,
    setFilterListFunction,
    filteredCollumns,
    deleteAllFilters,
  } = useContext(StarWarsContext);

  const operators = [
    'maior que',
    'menor que',
    'igual a',
  ];

  return (
    <div>
      <div>
        {
          useFiltersList.map((filter) => (
            <div key={ filter.collumnFilter }>
              <div
                data-testid="filter"
              >
                {`${filter.collumnFilter} ${filter.operatorFilter} ${filter.valueFilter}`}
                <button
                  type="button"
                  onClick={ () => setFilterListFunction(filter.collumnFilter) }
                >
                  X
                </button>
              </div>
            </div>

          ))
        }
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ deleteAllFilters }
        >
          X ALL
        </button>
      </div>
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
            // value={ useFilters.collumnFilter }
            // value="diameter"
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
          Valor
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
