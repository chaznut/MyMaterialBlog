module.exports = {
  siteTitle: "Chaznut's Blog", // Site title.
  siteTitleShort: 'Nutter Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'James Blog', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://chaznut.netlify.com/', // Domain of your website without pathPrefix.
  pathPrefix: '/gatsby-material-starter', // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: 'A blog written by a self-taught developer.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  siteGATrackingID: 'UA-47311644-4', // Tracking code ID for google analytics.
  disqusShortname: 'https-vagr9k-github-io-gatsby-material-starter', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'James Nutter', // Username to display in the author segment.
  userTwitter: '@theFlockaveli', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'DMV Area, USA', // User location to display in the author segment.
  userAvatar: 'https://i.imgur.com/G6RMyCE.jpg', // User avatar to display in the author segment.
  userDescription: 'Cats, coffee, and code.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/chaznut',
      iconClassName: 'fa fa-github'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/theFlockaveli',
      iconClassName: 'fa fa-twitter'
    },
    {
      label: 'Email',
      url: 'nutterj90@gmail.com',
      iconClassName: 'fa fa-envelope'
    }
  ],
  copyright: 'Copyright © 2018. James Nutter' // Copyright string for the footer of the website and RSS feed.
};
