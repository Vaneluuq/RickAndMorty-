import React from 'react';

const FilterByDead = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      value: e.target.value,
      key: 'status'
    });
  };
  return (
    <>
    <label htmlFor='status'> Status: </label>
    <select
        name='status'
        id='status'
        onChange={handleChange}
        value={props.deadFilter}
    >
    <option value='all'>All</option>
    <option value='Dead'>Dead</option>
    <option value='Alive'>Alive</option>
    <option value='unknown'>unknown</option>
    </select>
    </>
  );
};

export default FilterByDead;