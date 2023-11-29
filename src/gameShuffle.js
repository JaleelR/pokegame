


function randomPokes(info) {
    const array = [];
for (let i = 0; i < 4; i++){
  array.push(info[Math.floor(Math.random() * info.length)]) 
    }  
    return array;    
}

export default randomPokes