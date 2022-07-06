// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newArray = [...cats, name]
    return newArray
}

function prependCat(name) {
    const newArray = [name, ...cats]
    return newArray
}

function removeLastCat() {
    const newArray = cats.slice(0,cats.length-1)
    return newArray
}

function removeFirstCat() {
    const newArray = cats.slice(1)
    return newArray
}