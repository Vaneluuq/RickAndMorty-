import React from 'react';
import FilterByName from '../components/FilterByName';
import FilterBySpecies from '../components/FilterBySpecies';
import FilterByDead from '../components/FilterByDead';
import styles from '../CSS/styles.module.css';


const FilterSection = (props) => {

  const handleForm = (e) => e.preventDefault();

  return (
    <section className= {styles.containerFilter}>
      <form className='form' onSubmit={handleForm}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.nameFilter}
        />
        <FilterBySpecies
          handleFilter={props.handleFilter}
          speciesFilter={props.speciesFilter}
        />
        <FilterByDead
          handleFilter={props.handleFilter}
          deadFilter={props.deadFilter}
        />
      </form>
    </section>
  );
};

export default FilterSection;















// import FilterByName from './FilterByName';

// const FilterSection = (props) => {
//     return ( 
//         <section>
//             <FilterByName
//             filterCharacter = {props.filterCharacter}
//             setFilterCharacter = {props.setFilterCharacter}
//             />
//         </section>
//      );
// }
 
// export default FilterSection;