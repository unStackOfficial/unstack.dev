module.exports = {
  siteMetadata: {
    title: `unStack`,
    description: `An open-source meetup/conference for every web and mobile developer where learning is done on a whole other level through hands-on workshops and world-class talks.`,
    author: `@kingisaac95`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `unStack App`,
        short_name: `unStack`,
        start_url: `/`,
        background_color: `#00529C`,
        theme_color: `#00529C`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
