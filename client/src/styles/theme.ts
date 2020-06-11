export const theme = {
  white: '#ffffff',
  black: '#191818',
  lightGrey: '#4D4D4D',
  lighterGrey: '#868686',
  darkGrey: '#2B2B2B',
  hnOrange: '#FF8856',
  borderRadius: '20px',
  bigBorderRadius: '50px',
  fontExtraLight: '200',
  fontLight: '300',
  fontRegular: '400',
  fontBold: '700',
  fontExtraBold: '800',
  fontBlack: '900',
  spacingXS: '1.5rem',
  spacingS: '3rem',
  spacingM: '6rem',
  spacingL: '9rem',
  spacingXL: '12rem',
  mainShadow: '0 15px 12px rgba(0,0,0, .22), 0 19px 38px rgba(0,0,0, .30)'
}

const size = {
  laptop: '1500px',
  laptopL: '1792px',
  desktop: '1920px',
  desktopL: '2200px',
  desktopXL: '2560px'
}

export const device = {
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
  desktopXL: `(max-width: ${size.desktopXL})`
}