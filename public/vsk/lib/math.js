export const norm = (value, min, max) => {
  return (value - min) / (max - min)
}

export const lerp = (norm, min, max) => {
  return (max - min) * norm + min
}

export const mapping = (value, sourceMin, sourceMax, destMin, destMax) => {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
}