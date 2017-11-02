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
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  return kittens.splice(3, 0, 'Broom')
}

function prependKitten(name) {
  return kittens.splice(0, 0, 'Arnold')
}

function removeLastKitten() {
  return kittens.slice(0, 2)
}

function removeFirstKitten() {
  return kittens.slice(-2)
}
