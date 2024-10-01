function getBasketContent(nbrfruit) {
    // Tableau représentant les fruits en stock
    let fruits = [
        "strawberry",
        "strawberry",
        "strawberry",
        "apple",
        "apple",
        "lime",
        "lime",
        "peach",
        "pear",
        "pear"
    ];

    if (nbrfruit > fruits.length) {
        console.log("Too many fruit(s)selected.");
        return [];
    } else {
        console.log(nbrfruit + " fruit(s) selected");
        return fruits.slice(0, nbrfruit);
    }
}

let fruits = getBasketContent(4); 
showMyBasket(fruits);
