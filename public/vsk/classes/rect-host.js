import Rect from './rect.js'

class RectHost extends Rect {
  constructor(x, y, width, height, canvasHeight, type) {
    super(x, y, width, height, canvasHeight)
    this.createListeners(type)
  }

  createListeners = (type) => {
    if (type === 'right') {
      document.addEventListener('keydown', e => {
        switch (e.code) {
          case 'ArrowDown':
            this.moveDown = true
            break
          case 'ArrowUp':
            this.moveUp = true
            break
        }
      })
      document.addEventListener('keyup', e => {
        switch (e.code) {
          case 'ArrowDown':
            this.moveDown = false
            break
          case 'ArrowUp':
            this.moveUp = false
            break
        }
      })
    } else {
      document.addEventListener('keydown', e => {
        switch (e.code) {
          case 'KeyS':
            this.moveDown = true
            break
          case 'KeyW':
            this.moveUp = true
            break
        }
      })
      document.addEventListener('keyup', e => {
        switch (e.code) {
          case 'KeyS':
            this.moveDown = false
            break
          case 'KeyW':
            this.moveUp = false
            break
        }
      })
    }
  }
}

export default RectHost
