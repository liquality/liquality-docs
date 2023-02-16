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
      collapsed: false,
      label: "Wallet SDK",
      items: [
        {
          type: "doc",
          id: "sdk/sdk",
        },
        {
          type: "doc",
          id: "sdk/initialization",
        },
        {
          type: "doc",
          id: "sdk/auth",
        },
        {
          type: "doc",
          id: "sdk/tokens",
        },
        {
          type: "doc",
          id: "sdk/swap",
        },
        {
          type: "doc",
          id: "sdk/collectibles",
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

    {
      type: "link",
      label: "Contribute to Docs", // The link label
      href: "https://github.com/liquality/liquality-docs", // The external URL
      className: "bugReport",
    },

    // Shorthand syntax:
  ],
};
