const options = [
  'a house for a wealthy person',
  "a king's crest",
  'a drawing ideas bulletin board',
  'a wood fire in the night',
  'genes everywhere in the middle of the cell',
  'a dinner with steak',
  'a administration building',
  ' someone overcome by recognition',
  ' someone overcome by emotion',
  'your interpretation of a connection between two people',
  'a plant growth in the middle of a wasteland',
  'someone having difficulty',
  'an unhealthy meal',
  'a UI for a poem app',
  'a pile of food',
  'a gym membership UI',
  'an artisan at work',
  'an ornate gate',
  'a car accident, or maybe the aftermath',
  'a math app only for addition, lol',
  'a fancy reception for a party meant for unwealthy people',
  'two people having an argument',
  'a loaf of bread',
  'a UI for a priority seating app',
  'a UI for a suggestion tool',
  'a computer blueprint',
  'a song producing studio',
  'people discussing a theory',
  'a fancy event',
  'an employing app'
]

function random() {
  document.getElementById('text').innerHTML = options[getRandomInt(options.length)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}