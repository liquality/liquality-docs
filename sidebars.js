/* /**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} 
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  myLinksSidebar: [
    // External link
    {
      type: "link",
      label: "Facebook", // The link label
      href: "https://facebook.com", // The external URL
    },

    // Internal link
    {
      type: "link",
      label: "Home", // The link label
      href: "/", // The internal path
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   
};

module.exports = sidebars;
 */

module.exports = {
  mySidebar: [
    // Normal syntax:
    "intro",
    {
      type: "category",
      label: "Overview",
      collapsed: false,

      items: [
        {
          type: "doc",
          id: "overview/whatIsWalletApiSdk",
        },
        {
          type: "doc",
          id: "overview/howDoesItWork",
        },
      ],
    },

    {
      type: "category",
      label: "Wallet SDK",
      items: [
        {
          type: "doc",
          id: "functions/sdk",
        },
        {
          type: "doc",
          id: "functions/wallet",
        },
        {
          type: "doc",
          id: "functions/tokens",
        },
        {
          type: "doc",
          id: "functions/oraclefees",
        },
        {
          type: "doc",
          id: "functions/collectibles",
        },
      ],
    },

    {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "doc",
          id: "examples/createWallet",
        },
      ],
    },

    {
      type: "link",
      label: "Wallet API", // The link label
      href: "/walletapi", // The external URL
    },

    // Shorthand syntax:
  ],
};
