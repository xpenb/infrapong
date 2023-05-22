class Rect {
  constructor(x, y, width, height, canvasHeight) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.canvasHeight = canvasHeight
    this.moveDown = false
    this.moveUp = false
  }

  draw = (context, image) => {
    if (this.moveDown && this.y + this.height < this.canvasHeight) this.y += 10
    if (this.moveUp && this.y > 0) this.y += -10
    context.drawImage(image, this.x - 7, this.y)
    // context.fillRect(this.x, this.y, this.width, this.height)
  }
}

export default Rect
