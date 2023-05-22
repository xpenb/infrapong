class Vec {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  setX = val => {
    this.x = val
  }

  setY = val => {
    this.y = val
  }

  setAngle = angle => {
    const length = this.getLength()
    this.x = Math.cos(angle) * length
    this.y = Math.sin(angle) * length
  }

  getAngle = () => {
    return Math.atan2(this.y, this.x)
  }

  setLength = length => {
    const angle = this.getAngle()
    this.x = Math.cos(angle) * length
    this.y = Math.sin(angle) * length
  }

  getLength = () => {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  add = v2 => {
    return new Vec(this.x + v2.x, this.y + v2.y)
  }

  subtract = v2 => {
    return new Vec(this.x - v2.x, this.y - v2.y)
  }

  multiply = v2 => {
    return new Vec(this.x * val, this.y * val)
  }

  divide = val => {
    return new Vec(this.x / val, this.y / val)
  }

  addTo = v2 => {
    this.x += v2.x
    this.y += v2.y
  }
}

export default Vec
