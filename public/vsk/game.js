import createCanvas from './funcs/canvas.js'
import detectCollision from './funcs/collision.js'
import Ball from './classes/ball.js'
import RectHost from './classes/rect-host.js'
import { randomIntFromInterval } from './lib/utils.js'

//winner design
//flame

const images = [
  {
    name: 'rBall',
    source: 'ball.png',
    start: false
  },
  {
    name: 'bBall',
    source: 'ball-blue.png',
    start: false
  },
  {
    name: 'rFlame',
    source: 'flame.png',
    start: false
  },
  {
    name: 'rRacket',
    source: 'racket.png',
    start: false
  },
  {
    name: 'bRacket',
    source: 'racket-blue.png',
    start: true
  }
]

for (let i = 0; i < images.length; i++) {
  const image = new Image()
  image.src = './img/' + images[i].source
  image.onload = function () {
    state.images[images[i].name] = image
    if (images[i].start) state.game = true
    i++
  }
}

const state = {
  game: false,
  end: false,
  winner: null,
  scoreHost: 0,
  scoreClient: 0,
  images: {
    rBall: null,
    bBall: null,
    rFlame: null,
    rRacket: null,
    bRacket: null
  }
}

const { width, height, context, centerX, centerY } = createCanvas('canvas')
const ball = new Ball(
  centerX,
  centerY,
  10,
  randomIntFromInterval(0, Math.PI * 2),
  // Math.PI,
  40
)
const host = new RectHost(80, 0, 15, 300, height, 'left')
const client = new RectHost(width - 10 - 80, 0, 15, 300, height, 'right')

const resetBall = () => {
  ball.position.x = centerX
  ball.position.y = centerY
  ball.velocity.setAngle(randomIntFromInterval(0, Math.PI * 2))
}

const resetStyle = () => {
  const l = document.getElementById('bl')
  const r = document.getElementById('br')
  l.style.width = '20px'
  r.style.width = '20px'
  l.style.background =
    'linear-gradient(90deg, rgba(255, 255, 255, .2) 0%, rgba(255, 255, 255, 0) 100%)'
  r.style.background =
    'linear-gradient(-90deg, rgba(255, 255, 255, .2) 0%, rgba(255, 255, 255, 0) 100%)'
}

const stop = winner => {
  state.game = false
  state.winner = winner
  if (winner === 'host') {
    state.scoreHost += 1
    const scoreHost = document.getElementById('sl')
    scoreHost.innerText = state.scoreHost
    const r = document.getElementById('br')
    r.style.width = '100px'
    r.style.background =
      'linear-gradient(-90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 100%)'
  } else {
    state.scoreClient += 1
    const scoreClient = document.getElementById('sr')
    scoreClient.innerText = state.scoreClient
    const l = document.getElementById('bl')
    l.style.width = '100px'
    l.style.background =
      'linear-gradient(90deg, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 0) 100%)'
  }
  if (state.scoreHost < 5 && state.scoreClient < 5) {
    setTimeout(() => {
      state.game = true
      resetBall()
      resetStyle()
    }, 1000)
  } else {
    // document.getElementById('fin').style.opacity = 1
  }
}

const render = () => {
  requestAnimationFrame(render)
  if (!state.game) return
  context.clearRect(0, 0, width, height)
  ball.draw(
    context,
    state.images.rBall,
    state.images.bBall,
    state.images.rFlame
  )
  host.draw(context, state.images.bRacket)
  client.draw(context, state.images.rRacket)
  detectCollision(ball, host, client, width, height, stop)
}

render()
