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
  kittens.slice()
  return kittens
}

function prependKitten(name) {
  kittens.slice("Arnold")
  return kittens
}

function removeLastKitten() {
  kittens.slice(0, 1)
  return kittens
}

function removeFirstKitten() {
  kittens.slice(1)
  return kittens
}
