const board = document.querySelector('#board')
const colors = ['#f4ff93', '#a3ff93' , '#ff9693', '#93dfff', '#aa93ff', '#ff93fa']
const SQUARES_NUMBER = 500

for (let i=0; i<SQUARES_NUMBER; i++ ) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)

}

    function setColor(element) {

        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `none`

    }

    function getRandomColor() {
       const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
