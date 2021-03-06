
/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

var $container = document.getElementById('container')
var $topbar = document.getElementById('topbar')

var $sort = document.createElement('button')
var $shuffle = document.createElement('button')
var $fan = document.createElement('button')
var $flip = document.createElement('button')

$shuffle.textContent = 'Shuffle'
$sort.textContent = 'Sort'
$fan.textContent = 'Fan'
$flip.textContent = 'Flip'

$topbar.appendChild($flip)
$topbar.appendChild($shuffle)
$topbar.appendChild($fan)
$topbar.appendChild($sort)

var deck = Deck(2)

deck.cards.forEach(function (card, i) {
  card.enableDragging()
  card.enableFlipping()
})

$shuffle.addEventListener('click', function () {
  deck.shuffle()
  deck.shuffle()
})
$sort.addEventListener('click', function () {
  deck.sort()
})
$fan.addEventListener('click', function () {
  deck.fan()
})
$flip.addEventListener('click', function () {
  deck.flip()
})

deck.mount($container)

deck.intro()
deck.sort()

// secret message..
function printMessage (text) {
  var animationFrames = Deck.animationFrames
  var ease = Deck.ease
  var $message = document.createElement('p')
  $message.classList.add('message')
  $message.textContent = text

  document.body.appendChild($message)

  $message.style[transform] = translate(window.innerWidth + 'px', 0)

  var diffX = window.innerWidth

  animationFrames(1000, 700)
    .progress(function (t) {
      t = ease.cubicInOut(t)
      $message.style[transform] = translate((diffX - diffX * t) + 'px', 0)
    })

  animationFrames(6000, 700)
    .start(function () {
      diffX = window.innerWidth
    })
    .progress(function (t) {
      t = ease.cubicInOut(t)
      $message.style[transform] = translate((-diffX * t) + 'px', 0)
    })
    .end(function () {
      document.body.removeChild($message)
    })
}
