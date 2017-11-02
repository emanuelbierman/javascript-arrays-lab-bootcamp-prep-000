const app = "I don't do much."

var kittens = [
  "Milo",
  "Otis",
  "Garfield",
]

function destructivelyAppendKitten() {
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob')
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.slice(-1)
  return kittens
}

function destructivelyRemoveFirstKitten() {

}

function appendKitten(name) {

}

function prependKitten(name) {

}

function removeLastKitten() {

}

function removeFirstKitten() {

}
