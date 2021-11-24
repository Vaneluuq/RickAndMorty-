import React from 'react';
import styles from '../CSS/styles.module.css'

const CardCharacter = ({character}) => {

  const capitalizeFirstletter = (string) => {
    const firstLetter= string.charAt(0).toUpperCase()
    const restString = string.slice(1)
    return firstLetter + restString
   }
  
    return ( 
      <div className= {styles.containerTarget}>
      <img src={character.image} alt={character.name} className= {styles.imgTarget}/>
      <div className= {styles.containerText}>
        <h2>{character.name}</h2>
        <p>{capitalizeFirstletter(Object.keys(character)[2])} : {character.status}</p>
        <p>{capitalizeFirstletter(Object.keys(character)[3])} : {character.species}</p>
        <p>{capitalizeFirstletter(Object.keys(character)[5])} : {character.gender}</p>
        <p>{capitalizeFirstletter(Object.keys(character)[6])} : {character.origin.name}</p>
      </div> 
      </div>
     );
}
 
export default CardCharacter;