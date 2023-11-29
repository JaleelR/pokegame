import "./pokecard.css"
import React from 'react';

const Pokecard = ({ name, id, type, base_experience }) => {
   
    return (
        <div className='card'>  
         <b> {name}</b>  
        <img className="pimg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}  alt=''/> 
           <p>{type} </p>  
           <p>EXP {base_experience}</p> 
        </div>
    )
}
export default Pokecard;
