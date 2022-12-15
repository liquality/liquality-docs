// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Liquality",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Liquality.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  /* 
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} 
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // sidebarPath: require.resolve('./sidebars.js'),
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ], */

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: "openapi.yaml",
          routeBasePath: "/walletapi",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    "https://fonts.googleapis.com/css?family=Montserrat:400,400i,700",
    "/css/code-block-buttons.css",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Liquality Logo",
          src: "img/logo_light.svg",
          srcDark: "img/logo_dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Introduction",
          },
          {
            href: "/functions/sdk",
            label: "SDK",
            position: "left",
          },
          {
            href: "/walletapi",
            label: "API",
            position: "left",
          },
          {
            href: "https://github.com/Liquality",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            html: `© 2022, Liquality. All rights reserved.`,
          },
          {
            label: "Liquality",
            to: "https://Liquality.io",
          },
          {
            label: "Twitter",
            to: "https://twitter.com/Liquality_io",
          },
          {
            label: "GitHub",
            to: "https://github.com/Liquality",
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ["solidity"],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
