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
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
        },
      },
      backgroundColor: {
        skin: {
          'body': withOpacity('--color-body'),
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
        },
      },
      borderColor: {
        skin: {
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
        },
      },
      ringColor: {
        skin: {
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
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
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};