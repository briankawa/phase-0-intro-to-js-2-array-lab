// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    let cat = cats.slice();
    cat.push("Broom");
    return cat;
}
function prependCat(){
    let cat = cats.slice();
    cat.unshift("Arnold")
    return cat;
}
function removeLastCat(){
    let cat = cats.slice();
    cat.pop();
    return cat;
}
function removeFirstCat(){
    let cat = cats.slice();
    cat.shift();
    return cat;
}
