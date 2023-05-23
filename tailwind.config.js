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
            background: colors.coolGray[100],
            titles: colors.coolGray[800],
            texts: colors.coolGray[600],
            links: colors.blueGray[500],
            linksHover: colors.blue[700],
            blogWidget: colors.coolGray[100],
            blogWidgetTag: colors.blueGray[600],
            blogWidgetTagDesc: colors.blueGray[100],
            blogWidgetTitle: colors.blueGray[800],
            blogs: {
                titles: colors.coolGray[800],
                texts: colors.coolGray[600],
                links: colors.blueGray[500],
                linksHover: colors.blue[700],
                borders: colors.coolGray[800]
            },
            navbars: {
                background: colors.blueGray[800],
                titles: colors.coolGray[200],
                texts: colors.coolGray[400],
                links: colors.blueGray[400],
                linksHover: colors.blueGray[600]
            }
            // TODO: Add dark mode colour palette
        }
    }
    // ...
}