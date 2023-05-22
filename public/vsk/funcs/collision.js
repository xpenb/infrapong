import Vec from '../lib/vec.js'
import { rectIntersect } from '../lib/utils.js'

const detectCollision = (b, r, r2, width, height, stop) => {
  //goal
  if (b.position.x - b.radius < 0) stop('client')
  if (b.position.x + b.radius > width) stop('host')

  //floor/ceil
  if (b.position.y - b.radius < 0 || b.position.y + b.radius > height) {
    b.velocity.setY(b.velocity.y * -1)
  }


  //racket intersection
  const intersect = rectIntersect(r, r2, b)
  if (intersect) {
    if (
      (intersect === r && Math.sign(b.velocity.x) === -1) ||
      (intersect === r2 && Math.sign(b.velocity.x) === 1)
    ) {
      b.velocity.setX(b.velocity.x * -1)
    }
    const v = new Vec(100, b.position.y - intersect.y - intersect.height / 2)
    const d = Math.sin(v.getAngle())
    b.changeAngle(d)
    b.increaseSpeed(Math.abs(d))
  }
}

export default detectCollision
