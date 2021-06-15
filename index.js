// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats[cats.length] = name;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const cats_copy = cats.slice();
    cats_copy[cats.length] = name;
    return cats_copy;
}

function prependCat(name) {
    const cats_copy = cats.slice();
    cats_copy.unshift(name);
    return cats_copy;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}