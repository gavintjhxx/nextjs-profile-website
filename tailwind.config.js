const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    variants: {
        extend: {
            padding: ['hover'],
        }
    },
    theme: {
        colors: {
            background: colors.coolGray[50],
            titles: colors.blueGray[800],
            texts: colors.coolGray[600],
            links: colors.blueGray[400],
            linksHover: colors.blue[400],
            blogWidget: colors.coolGray[100],
            blogWidgetTag: colors.blueGray[600],
            blogWidgetTagDesc: colors.blueGray[100],
            blogWidgetTitle: colors.blueGray[800],
            blogs: {
                titles: colors.coolGray[800],
                texts: colors.coolGray[700],
                links: colors.coolGray[500],
                linksHover: colors.coolGray[700],
                navBackgrounds: colors.coolGray[200],
                borders: colors.coolGray[800]
            }
        }
    }
    // ...
}