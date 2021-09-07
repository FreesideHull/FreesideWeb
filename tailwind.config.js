module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/*.html',
    './internal/**/*.njk',
    './internal/*.njk',
    './internal/**/*.md',
    './internal/*.md',


    ],
    theme: {
      extend: {
        colors: {
        primary: '#fe7c3b',
        secondary: '#525252',
        danger: '#240d09',
        discord: '#5865F2'
        }
    }
  }
}