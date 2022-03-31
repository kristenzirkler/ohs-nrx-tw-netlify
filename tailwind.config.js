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
function image(variableName) {
  return `var(${variableName})`
}
module.exports = {
  purge: [`_site/**/*.html`],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: theme => ({
        'logo': image('--image-logo')
      }),
      fontFamily: {
        sans: fontFormat('--font-sans'),
        display: fontFormat('--font-display')
      },
      textColor: {
        skin: {
          'page': withOpacity('--color-page'),
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
          'primary': withOpacity('--color-text-primary'),
          'header': withOpacity('--color-text-header'),
          'link': withOpacity('--color-text-link'),
        },
      },
      backgroundColor: {
        skin: {
          'body': withOpacity('--color-body'),
          'page': withOpacity('--color-page'),
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
          'border': withOpacity('--color-border'),
        },
      },
      borderColor: {
        skin: {
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
          'primary': withOpacity('--color-border'),
        },
      },
      divideColor: {
        skin: {
          'accent-primary': withOpacity('--color-accent-primary'),
          'button-primary': withOpacity('--color-button-primary'),
          'button-primary-hover': withOpacity('--color-button-primary-hover'),
          'primary': withOpacity('--color-border'),
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