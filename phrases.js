var phrases = [
  'May the force be with you.',
  'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
  'When I left you, I was but the learner. Now I am the master.',
  'I find your lack of faith disturbing.',
  'Your focus determines your reality.',
  'Do. Or do not. There is no try.',
  'In my experience there is no such thing as luck.',
  'So this is how liberty dies…with thunderous applause.',
  'For my ally is the Force, and a powerful ally it is.',
  'Don’t underestimate the Force.',
  'Twice the pride, double the fall.',
  'I felt a great disturbance in the Force, as if millions of voices suddenly cried out in terror and were suddenly silenced.',

]

$(document).on('ready', function() {
  $('#phrase').text(phrases[Math.floor(Math.random()*phrases.length)])

  $('#generator').on('click', function() {
    $('#phrase').text(phrases[Math.floor(Math.random()*phrases.length)]);
  })

  $('#adder').on()
});
