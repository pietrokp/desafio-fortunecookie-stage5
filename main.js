const playGame = document.querySelector('#fortune-cookie')
const tryAgain = document.querySelector('button')
const container1 = document.querySelector('.container1')
const container2 = document.querySelector('.container2')
const cookieText = document.querySelector('#p1')

const newCookieText = new Array ()
newCookieText[0] = 'A vida trará coisas boas se tiver paciência.'
newCookieText[1] = 'Não compense na ira o que lhe falta na razão.'
newCookieText[2] = 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.'
newCookieText[3] = 'A juventude não é uma época da vida, é um estado de espírito.'
newCookieText[4] = 'Siga os bons e aprenda com eles.'
newCookieText[5] = 'Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.'
newCookieText[6] = 'Espere pelo mais sábio dos conselhos: o tempo.'
newCookieText[7] = 'Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.'
newCookieText[8] = 'A maior barreira para o sucesso é o medo do fracasso.'
newCookieText[9] = 'Realize o óbvio, pense no improvável e conquiste o impossível.'
const x = Math.floor(8 * Math.random())

function toggleContainer() {
    container1.classList.toggle('hide')
    container2.classList.toggle('hide')
}

function changeText() {
    cookieText.innerHTML = newCookieText[x]
}

function refreshPage() {
    location.reload()
}

playGame.addEventListener('click', toggleContainer)
playGame.addEventListener('click', changeText)
tryAgain.addEventListener('click', refreshPage)


