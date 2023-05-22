const createCanvas = id => {
  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth * 2
  canvas.height = window.innerHeight * 2
  canvas.style.width = canvas.width / 2 + 'px'
  canvas.style.height = canvas.height / 2 + 'px'
  const context = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height
  const centerX = width / 2
  const centerY = height / 2
  return { width, height, context, centerX, centerY }
}

export default createCanvas
