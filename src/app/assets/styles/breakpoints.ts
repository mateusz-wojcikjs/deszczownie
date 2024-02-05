const size = {
  xxs: '426px',
  xs: '480px',
  sm: '768px',
  m: '993px',
  lg: '1200px',
  xl: '1320px',
}
const device = {
  xxs: `(max-width: ${size.xxs})`,
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  m: `(max-width: ${size.m})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
}

const breakpoints = {
  s: 768,
  m: 1024,
  l: 1440,
}
export default { size, device, breakpoints }
