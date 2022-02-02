document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  //EX 2-----------------------------------------
  let tablero = document.querySelector(".grid")
  let puntos = document.getElementById("result")

  tablero.addEventListener('mouseout', () => {
  puntos.style.fontSize = 20+"px"})
    
  tablero.addEventListener('mouseover', () => {
  puntos.style.fontSize = 30+"px"})

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
      }
    }
    //EX3--------------------------------------------
    let contador = 4
  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    //EX3 cogemos las vidas
    let vides = document.getElementById("vides")

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
      //EX3 Vamos restando vidas al contador si clica las mismas imagenes
      contador--
      vides.innerHTML = contador
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
      //EX3 Restamos al contador si se equivoca
      contador--
      vides.innerHTML = contador
    }
    //EX3 Mensaje de alerta cuando ya hemos perdido (contador==0) 
    if (contador == 0) alert("Has perdut Carlos Martin Panzardo Becerra!")

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //EX4 Hacemos que nos muestre el historial al hacer click
  let accions = document.getElementById("accions")
  let botonHistorial = document.getElementById("botonHistorial") 
  botonHistorial.addEventListener('click', () => {
    accions.style.display = "block"
  })
  let contadorAccions = 0
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    contadorAccions++
    
    const taula = document.createElement('div')
    const taulacontent = `
    <p>Acció ${contadorAccions}: ${cardArray[cardId].name}</p>
    `
    taula.innerHTML = taulacontent
    accions.append(taula)
    console.log(taula);
  }
  createBoard()
})