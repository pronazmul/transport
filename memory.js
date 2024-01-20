// Load Dynamic Images
document.addEventListener('DOMContentLoaded', function () {
  // Server images Urls
  let serverUrl = 'http://localhost:9000/images'

  function loadImages() {
    fetch(serverUrl)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        var selectedCards = document.querySelectorAll('li.card[data-img]')
        selectedCards.forEach(function (card) {
          var dataImgValue = card.getAttribute('data-img')
          var imgFront = card.querySelector('.img-front')
          var imgBack = card.querySelector('.img-back')
          imgFront.src = data?.find((i) => i?.name === 'qmark')?.url
          imgBack.src = data?.find((i) => i?.name === dataImgValue)?.url
        })
      })
      .catch((error) => {
        console.error('Error loading data:', error)
      })
  }

  loadImages()
})

NiceSelect.bind(document.getElementById('timeSelect'))

const cards = document.querySelectorAll('.card')
let flippedCard = false
let lockBoard = false
let firstCard, secondCard
let timerInterval
let timeRemaining = 30
let timerStarted = false
let count = 0
const restart = document.getElementById('restart')

function gameStart() {
  cards.forEach((card) => {
    let setRandom = Math.floor(Math.random() * 12 + 1)
    card.style.order = setRandom
    card.classList.remove('flip')
    card.addEventListener('click', flipCard)
  })
  lockBoard = false
  count = 0
}

function startTimer() {
  if (!timerStarted) {
    const timerDisplay = document.querySelector('.time span b')

    timerInterval = setInterval(() => {
      timeRemaining--
      timerDisplay.innerText = timeRemaining

      if (timeRemaining === 0) {
        clearInterval(timerInterval)
        alert('Tiden är ute! Game over')
        restartGame()
      }
    }, 1000)

    timerStarted = true
  }
}

function stopTimer() {
  clearInterval(timerInterval)
  timerStarted = false
}

function flipCard() {
  if (!timerStarted) {
    startTimer()
  }
  if (lockBoard) return
  if (this === firstCard) return

  this.classList.add('flip')

  if (!flippedCard) {
    flippedCard = true
    firstCard = this
    return
  }

  secondCard = this
  checkForMatch()
  count++
  counter()
}

function counter() {
  document.querySelector('.flips span b').innerText = count
}

function checkForMatch() {
  let isMatch = firstCard.dataset.img === secondCard.dataset.img

  isMatch ? disableCards() : unflipCards()
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)

  resetBoard()
}

function unflipCards() {
  lockBoard = true

  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')

    resetBoard()
  }, 1000)
}

function resetBoard() {
  ;[flippedCard, lockBoard] = [false, false]
  ;[firstCard, secondCard] = [null, null]

  if (document.querySelectorAll('.card:not(.flip)').length === 0) {
    setTimeout(() => {
      alert('Grattis! Du har klarat spelet! Det krävdes ' + count + ' drag.')
      restartGame()
    }, 500)
  }
}
function changeTime() {
  stopTimer()
  timeRemaining = parseInt(document.getElementById('timeSelect').value)
  document.querySelector('.time span b').innerText = timeRemaining
  gameStart()
}

function restartGame() {
  stopTimer()
  timeRemaining = parseInt(document.getElementById('TimeSelect').value)
  gameStart()
}

function restartGame() {
  stopTimer()
  timeRemaining = parseInt(document.getElementById('timeSelect').value)
  gameStart()
  counter()
  count = 0
}

document.getElementById('timeSelect').addEventListener('change', changeTime)
restart.addEventListener('click', restartGame)

gameStart()
