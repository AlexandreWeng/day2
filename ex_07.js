fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];


function whoisthatpokemon(poke) {
    // Check if the index is -1, return the last fruit
    if (poke === -1) {
        return fruits[fruits.length - 1];
    }
    
    if (poke >= 0 && poke < fruits.length) {
        return fruits[poke];
    }
    return null;
}
let result = whoisthatpokemon(3)
displayResult(result) 
