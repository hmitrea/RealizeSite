/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Realize',
    // description: "Realize is an extension for Chrome and Firefox to visualize state flow and React app hierarchy.",
    // image: "../src/pages/images/realizeLogoPNG.png"
  },
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['MuseoModerno', 'Roboto', 'Droid Serif', 'Source Sans Pro']
        },
        icon: "../src/pages/images/realizeLogoPNG.png"
      }
    },
    `gatsby-plugin-sass`, 
    // `gatsby-plugin-react-helmet`
  ]
}
