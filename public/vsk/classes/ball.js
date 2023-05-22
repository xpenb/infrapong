import Vec from '../lib/vec.js'
import { mapping } from '../lib/math.js'

class Ball {
  constructor(x, y, speed, direction, radius) {
    this.position = new Vec(x, y)
    this.velocity = new Vec()
    this.velocity.setLength(speed)
    this.velocity.setAngle(direction)
    this.radius = radius
  }

  draw = (context, rImage, bImage, rFlame) => {
    if (Math.sign(this.velocity.x) === 1) {
      context.drawImage(bImage, this.position.x - 65.5, this.position.y - 65.5)
    } else {
      context.drawImage(rImage, this.position.x - 65.5, this.position.y - 65.5)
    }
    this.position.addTo(this.velocity)
  }

  increaseSpeed = d => {
    const speed = mapping(d, 0, 1, 0, 0.5)
    this.velocity.setLength(this.velocity.getLength() + speed)
  }

  changeAngle = d => {
    this.velocity.y += d * 2
  }
}

export default Ball
