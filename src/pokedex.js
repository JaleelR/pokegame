import React from "react"
import Pokecard from "./pokecard"
import Pokeinfo from "./pokeInfo"
import "./pokedeck.css"
const Pokedex = (props) => {
    let winMessage = null;
    if (props.isWinner) {
     winMessage =  <h3>You Win </h3>
    } else {
        winMessage = <h3> You Lose</h3>
    }
    return (
        <div className="deckInfo"> 
          
        <div className="deck">
             <div className="column">
                {props.info.map(i => (
                    
    
                <Pokecard name={i.name} id={i.id} type={i.type} base_experience={i.base_experience}/>
                ))
                }
              </div> 
            </div>
         <p>Total Exp:{props.total} </p>
             {winMessage} 
        </div>
    )

}
export default Pokedex