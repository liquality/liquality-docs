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
          id: "functions/initialization",
        },
        {
          type: "doc",
          id: "functions/auth",
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

    /*   {
      type: "category",
      label: "Examples",
      items: [
        {
          type: "doc",
          id: "examples/createWallet",
        },
      ],
    }, */

    {
      type: "link",
      label: "Wallet API", // The link label
      href: "/walletapi", // The external URL
    },

    {
      type: "html",
      value:
        "<hr style='background-color:#e4aeff'/><strong style='color: #e4aeff'>Additional Reading</strong>",
      className: "sidebar-title",
      defaultStyle: true,
    },

    {
      type: "link",
      label: "Report a Bug", // The link label
      href: "https://github.com/liquality/wallet-api/issues", // The external URL
      className: "bugReport",
    },

    // Shorthand syntax:
  ],
};
