module.exports = {
  siteMetadata: {
    title: `Ivan Cernuto`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false,   
            },
          },

          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {}
          }
        ],
      },
    },
  ],
}
