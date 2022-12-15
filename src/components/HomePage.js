import React from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";

import IntroLogoDark from "../../static/img/intro_illustration.svg";
import IntroLogoLight from "../../static/img/intro_illustration_light.svg";

import AllBlockchains from "../../static/img/all_blockchains.svg";
import Solana from "../../static/img/solana.svg";
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

export default function HomePage() {
  const { isDarkTheme } = useColorMode();

  const _renderWalletSdkNavigationRow = () => {
    let rows = [];

    rows = listToLoop.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            borderLeft: "1px solid grey",
            height: 100,
            fontSize: 15,
            padding: 20,
            marginLeft: index === 0 ? 0 : 60,
          }}
        >
          <p
            style={{
              marginTop: -23,
            }}
          >
            {item.title}
          </p>
          <a
            href={item.href}
            style={{
              color: "white",
            }}
            class="button"
          >
            <BtnArrow style={{}} />
          </a>
        </div>
      );
    });

    return rows;
  };

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        className="container"
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10,
          marginBottom: 50,
        }}
      >
        {_renderWalletSdkNavigationRow()}
      </div>
      <div
        style={{
          width: "100%",
          height: 196,
          background: "rgba(255, 255, 255, 0.14)",
          border: "1px solid #000D35",
          borderRadius: 28,
          marginTop: 30,
          padding: 30,
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Bitcoin
              style={{
                marginRight: 30,
              }}
            />
            <Eth
              style={{
                marginRight: 30,
              }}
            />
            <Rsk
              style={{
                marginRight: 30,
              }}
            />
            <Near
              style={{
                marginRight: 30,
              }}
            />
            <Polygon
              style={{
                marginRight: 30,
              }}
            />
            <Bnb
              style={{
                marginRight: 30,
              }}
            />
            <Arb
              style={{
                marginRight: 30,
              }}
            />
            <Opt
              style={{
                marginRight: 30,
              }}
            />
            <Avax
              style={{
                marginRight: 30,
              }}
            />
            <Solana
              style={{
                marginRight: 30,
              }}
            />
          </div>
        </p>
      </div>
    </div>
  );
}
