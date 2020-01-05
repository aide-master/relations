export const getColorByPercent = (percent: number): string => {
  const startRGB = [0x18, 0x90, 0xff]
  const endRGB = [0xff, 0x00, 0x00]
  const rgb = startRGB.map((start, index) => Math.floor(start + (endRGB[index] - start) * percent))
  const color = '#' + rgb.map(v => Number(v).toString(16).padStart(2, '0')).join('')
  return color
}

export const getReverseColor = (hex: string, bw: boolean): string => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1)
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.')
  }
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF'
  }
  return [r, g, b].reduce((res, item) => res + (255 - item).toString(16).padStart(2, '0'), '#')
}
