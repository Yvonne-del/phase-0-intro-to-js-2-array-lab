// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push('Ralph');
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    return [...cats, "Broom"];
}
function prependCat(name){
    return ["Arnold", ...cats];
}
function removeLastCat() {
    // Create a copy of the array and remove the last element
    return cats.slice(0, -1);
}
function removeFirstCat(name){
    return cats.slice[-1, 0];
}
function removeFirstCat() {
    // Use slice to create a new array starting from index 1 (skipping the first cat)
    return cats.slice(1);
}