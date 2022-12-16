import React from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";

import IntroLogoDark from "../../static/img/intro_illustration.svg";
import IntroLogoLight from "../../static/img/intro_illustration_light.svg";

import AllBlockchains from "../../static/img/all_blockchains.svg";
import SolanaLight from "../../static/img/solana_lightmode.svg";
import SolanaDark from "../../static/img/solana_darkmode.svg";

import Avax from "../../static/img/avax.svg";
import Opt from "../../static/img/opt.svg";
import Arb from "../../static/img/arb.svg";

import Bnb from "../../static/img/bnb.svg";
import Polygon from "../../static/img/polygon.svg";
import Near from "../../static/img/near.svg";
import Rsk from "../../static/img/rsk.svg";
import Eth from "../../static/img/eth.svg";
import Bitcoin from "../../static/img/bitcoin.svg";
import BtnArrow from "../../static/img/button.svg";

const listToLoop = [
  {
    title: (
      <p>
        Create <br /> & Auth
      </p>
    ),
    href: "/functions/wallet",
  },
  {
    title: (
      <p>
        Tokens & <br /> Balances
      </p>
    ),
    href: "/functions/tokens",
  },
  {
    title: (
      <p>
        Fees and Price <br /> Aggregation
      </p>
    ),
    href: "/functions/oraclefees",
  },
  {
    title: (
      <p>
        Collectibles <br /> & NFTs
      </p>
    ),
    href: "/functions/collectibles",
  },
];

let logoStyle = {
  marginRight: 40,
};
const supportedBlockchainsList = [
  {
    logo: <Bitcoin style={logoStyle} />,
    title: "BITCOIN",
  },
  {
    logo: <Eth style={logoStyle} />,
    title: "ETHEREUM",
  },
  {
    logo: <Rsk style={logoStyle} />,
    title: "RSK",
  },
  {
    logo: <Near style={logoStyle} />,
    title: "NEAR",
  },
  {
    logo: <Polygon style={logoStyle} />,
    title: "POLYGON",
  },
  {
    logo: <Bnb style={logoStyle} />,
    title: "BNB",
  },
  {
    logo: <Arb style={logoStyle} />,
    title: "ARBITRUM",
  },
  {
    logo: <Opt style={logoStyle} />,
    title: "OPTIMISM",
  },
  {
    logo: <Avax style={logoStyle} />,
    title: "AVALANCHE",
  },
  {
    logo: <SolanaDark style={logoStyle} />,
    title: "SOLANA",
  },
];

export default function HomePage() {
  const { isDarkTheme } = useColorMode();

  const _renderWalletSdkNavigationRow = () => {
    let rows = [];

    rows = listToLoop.map((item, index) => {
      return (
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          key={index}
          style={{
            borderLeft: "1px solid grey",
            height: 100,
            fontSize: 15,
            padding: 20,
            marginBottom: 50,
          }}
        >
          <p
            style={{
              marginTop: 0,
            }}
          >
            {item.title}
          </p>
          <a
            href={item.href}
            style={{
              color: "white",
            }}
            className="button"
          >
            <BtnArrow style={{}} />
          </a>
        </div>
      );
    });

    return (
      <div
        className="container"
        style={{ width: "100%", display: "flex", flexDirection: "row" }}
      >
        <div className="row">{rows}</div>
      </div>
    );
  };

  const _renderSupportedBlockchains = () => {
    let rows = [];

    rows = supportedBlockchainsList.map((item, index) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.logo}
          <p
            style={{
              marginRight: 40,
              marginTop: 15,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: 9,
              letterSpacing: 0.5,
              color: isDarkTheme ? "#FFFFFF" : "#000000",
            }}
          >
            {item.title}
          </p>
        </div>
      );
    });

    return <div style={{ display: "flex", flexWrap: "wrap" }}>{rows}</div>;
  };

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 20,
            padding: 10,
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: 40,
              fontFamily: "Montserrat",
              fontWeight: "800",
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            Web3 Wallet API & SDK
          </p>
          <p
            style={{
              fontSize: 16,
            }}
          >
            An immersive wallet solution for games and app developers, with all
            of web3's benefits and none of the friction{" "}
          </p>
          <a
            href="/overview/whatIsWalletApiSdk"
            style={{
              borderRadius: 22,
              background: "#9D4DFA",
              width: 140,
              padding: 10,
              color: "white",
            }}
            class="button"
          >
            Learn more
          </a>
        </div>
        <div style={{ marginleft: 129 }}>
          {isDarkTheme ? <IntroLogoDark /> : <IntroLogoLight />}
        </div>
      </div>
      <h1>Wallet SDK</h1>
      {/*  <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          marginBottom: 50,
        }}
      > */}
      {_renderWalletSdkNavigationRow()}

      <div
        style={{
          width: "100%",
          height: 196,
          background: "rgba(255, 255, 255, 0.14)",
          border: "1px solid #000D35",
          borderRadius: 28,
          marginTop: 30,
          padding: 30,
          boxShadow: isDarkTheme ? null : "5px 5px black",
        }}
      >
        {" "}
        <p
          style={{
            fontSize: 13,
          }}
        >
          <b>SUPPORTED BLOCKCHAINS</b>
          <br></br>
          <br></br>
          {_renderSupportedBlockchains()}
        </p>
      </div>
    </div>
  );
}
