export const getBoundingBox = b => {
  return {
    minX: b.position.x - b.radius,
    maxX: b.position.x + b.radius,
    minY: b.position.y - b.radius,
    maxY: b.position.y + b.radius
  }
}

export const inRange = (rangeStart, rangeStop, from, to) => {
  for (let i = Math.trunc(from); i <= Math.trunc(to); i++) {
    for (let j = Math.trunc(rangeStart); j <= Math.trunc(rangeStop); j++) {
      if (j === i) return true
    }
  }
  return false
}

export const rectIntersect = (r, r2, b) => {
  const bb = getBoundingBox(b)
  if (
    bb.minX <= r.x + r.width &&
    inRange(bb.minY, bb.maxY, r.y, r.y + r.height)
  ) {
    return r
  }
  if (bb.maxX >= r2.x && inRange(bb.minY, bb.maxY, r2.y, r2.y + r2.height)) {
    return r2
  }
  return false
}

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
