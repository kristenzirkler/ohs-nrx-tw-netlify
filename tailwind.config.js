function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
function fontFormat(variableName) {
  return `var(${variableName}), 'sans-serif'`
}
module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        sans: fontFormat('--font')
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),

          'body': withOpacity('--color-body'),
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
      fontSize: {
        'xs': '.875rem',
        'sm': '1rem',
        'tiny': '1rem',
        'base': '1.00625rem',
        'lg': '1.06rem',
        'xl': '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
        '6xl': '4rem',
        '7xl': '5rem',
      }
    },
  },
  variants: {},
  plugins: [],
};