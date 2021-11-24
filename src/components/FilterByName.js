import React from 'react'

const FilterByName = (props) => {


  const handleChange = (e) => {
    props.handleFilter({
      value: e.target.value,
      key: 'name',
    });
  };
  return (
    <>
      <label className='form__label--name' htmlFor='name'>
        "Welcome to the club!"
      </label>
      <input
        className='form__input'
        type='text'
        name='name'
        id='name'
        value={props.nameFilter}
        placeholder='Search some pals...'
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

















// function FilterByName({filterCharacter, setFilterCharacter}) {

//   const inputChange = (e) => setFilterCharacter(e.target.value);
//   const handleForm = (e) =>e.preventDefault();

//     return (
//      <section>
//        <form onSubmit={handleForm}>
//           <input type="text" placeholder="A quien quieres encontrar?"  
//               value={filterCharacter} onChange={inputChange} />    
//           <button type="submit"><i className="fas fa-search"></i></button>
//        </form>
//       </section>

//     );
//   }

//   export default  FilterByName
