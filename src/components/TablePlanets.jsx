import React from 'react';
import PropTypes from 'prop-types';

function TablePlanets({ planets }) {
  // const {
  //   name,

  //   rotation_period,
  //   orbital_period,
  //   diameter,
  //   climate,

  //   gravity,
  //   terrain,
  //   surface_water,
  //   population,

  //   films,
  //   created,
  //   edited,
  //   url,
  // } = planets;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {planets.map(({
          name,

          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,

          gravity,
          terrain,
          surface_water: surfaceWater,
          population,

          films,
          created,
          edited,
          url,
        }) => {
          console.log('Nadaa');
          return (
            <tr key={ name }>
              <td>{name}</td>
              <td>{rotationPeriod}</td>
              <td>{orbitalPeriod}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{surfaceWater}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TablePlanets.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotationPeriod: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      films: PropTypes.arrayOf(PropTypes.string),
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default TablePlanets;