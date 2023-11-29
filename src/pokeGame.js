import React from "react";
import Pokedex from "./pokedex";
import randomPokes from "./gameShuffle";
import Pokeinfo from "./pokeInfo";
import "./PokeGame.css"
const PokeGame = () => {     
const handOne = randomPokes(Pokeinfo);
const handTwo = randomPokes(Pokeinfo);
    const p1 = handOne.reduce((acc, i) => acc + i.base_experience, 0);
const p2 = handTwo.reduce((acc, i) => acc + i.base_experience, 0); 
    


    return (
        <>
            <div className="deck1">
           <h4>player 1</h4>
            <Pokedex info={handOne} total={p1} isWinner={p1 > p2} />
            </div>
            <div className="deck2">
        <h4> palyer 2 </h4>
                <Pokedex info={handTwo} total={p2} isWinner={p1 < p2} />
            </div>
      </>
   
    )
}
export default PokeGame