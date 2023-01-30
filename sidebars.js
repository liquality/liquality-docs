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

    // Shorthand syntax:
  ],
};
