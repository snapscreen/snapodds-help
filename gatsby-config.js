require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://help.snapodds.com/`,
    title: `Help SnapOdds`,
    description: `How to Snap and get Odds.`,
    author: {
      name: `Matthias Grieder`,
    },
    email: `hello@snapodds.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SnapOdds`,
        short_name: `SnapOdds`,
        start_url: `/`,
        background_color: `#00172e`,
        theme_color: `#2DD4BF`,
        display: `minimal-ui`,
        icon: `src/images/SnapOdds_Icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: 'teER1MbX1xgW8m9pzzKFajaJ8JW6rYDR',
        customSnippet: '!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="teER1MbX1xgW8m9pzzKFajaJ8JW6rYDR";;analytics.SNIPPET_VERSION="4.15.3";analytics.load("teER1MbX1xgW8m9pzzKFajaJ8JW6rYDR");analytics.page();}}();'
      },
    }
  ],
};
