import React from 'react';

const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      value: e.target.value,
      key: 'species'
    });
  };

  return (
    <>
      <label htmlFor='species'> Species: </label>
      <select
        name='species'
        id='species'
        onChange={handleChange}
        value={props.speciesFilter}
      >
        <option value='all'>All</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;