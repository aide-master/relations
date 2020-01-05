export const getColorByPercent = (percent: number): string => {
  const startRGB = [0x18, 0x90, 0xff]
  const endRGB = [0xff, 0x00, 0x00]
  const rgb = startRGB.map((start, index) => Math.floor(start + (endRGB[index] - start) * percent))
  const color = '#' + rgb.map(v => Number(v).toString(16).padStart(2, '0')).join('')
  return color
}
