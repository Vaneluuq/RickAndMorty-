import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardCharacter from '../components/CardCharacter';
import FilterSection from '../components/FilterSection';
import styles from '../CSS/styles.module.css';
import Header from '../components/Header';


const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [nameFilter, setNameFilter] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('all');
    const [deadFilter, setDeadFilter] = useState('all');

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
       .then(response => {
          setCharacters(response.data.results);
        })
         .catch(e => {
          console.log(e);
           })
  }, []);
  

    const handleFilter = (data) => {
        if (data.key === 'name') {
          setNameFilter(data.value);
        } else if (data.key === 'species') {
          setSpeciesFilter(data.value);
        } else if (data.key === 'status') {
          setDeadFilter(data.value);
        }
      };


      const renderFilteredCharacters = characters
      .filter((character) => {
        return character.name.toLowerCase().includes(nameFilter.toLowerCase());
      })
      .filter((character) => {
        return speciesFilter === 'all'
          ? true
          : character.species === speciesFilter;
      })
      .filter((character) => {
        return deadFilter === 'all'          
          ? true
          : character.status === deadFilter;
      })
      .sort((a, b) => (a.name > b.name ? 1 : -1));



    return ( 
        <div className={styles.container}>
            <Header/>
            <FilterSection
                handleFilter={handleFilter}
                nameFilter={nameFilter}
                speciesFilter={speciesFilter}
                deadFilter={deadFilter}
            />

            <section className= {styles.containerCards}>
            {
                renderFilteredCharacters.length > 0 ? (
                    renderFilteredCharacters.map((character) => (
                         <div className = {styles.containerCard}>
                            <CardCharacter key={character.id} character= {character}/>
                        </div>
                    ))
                ):(
                    <p>
						No se encuentra ningun personaje llamado <strong>"{nameFilter}"</strong> en este universo.
					</p>

                )
            }

            </section>    
        </div>

     );
}
 
export default Home;