import Rect from './rect.js'

class RectClient extends Rect {
  constructor(x, y, width, height, canvasHeight) {
    super(x, y, width, height, canvasHeight)
  }

  setPosition = y => {
    this.y = y
  }
}

export default RectClient
