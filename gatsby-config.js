/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site with GraphQL`,
    description: `My First Front End Site`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-contentful`,
        options: {
        spaceId: `ax0qpos29tny`,
        accessToken: `yDAZEs23NSikt2Nl7zd8q2uciN8HDcvjg-DmxbuQxiI`,
      },
    },
  ],
}
