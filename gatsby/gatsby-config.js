import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizzas`,
    description: `The best pizza place`,
    twitter: '@slicksSlices',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // Name of the plugin
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'n70ivd0j',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
