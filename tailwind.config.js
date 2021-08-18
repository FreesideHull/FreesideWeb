module.exports = {
    theme: {
      backgroundColor: theme => ({

       ...theme('colors'),

       'primary': '#fe7c3b',

       'secondary': '#fcac67',

       'danger': '#240d09',
      }),
      gradientColorStops: theme => ({

        ...theme('colors'),
 
        'primary': '#fe7c3b',
 
        'secondary': '#ff5f0f',})
    }
  }