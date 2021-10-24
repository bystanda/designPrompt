const options = [
  'random 1',
  'random 2',
  'random 3',
  'random 4',
  'random 5'
]

function random() {
  document.getElementById('text').innerHTML = options[getRandomInt(options.length)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}