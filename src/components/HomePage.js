import React from "react";
import Layout from "@theme/Layout";
import IntroLogo from "../../static/img/intro_illustration.svg";
import AllBlockchains from "../../static/img/all_blockchains.svg";

const listToLoop = [
  {
    title: (
      <p>
        Create <br /> & Auth
      </p>
    ),
    href: "/functions/wallet",
  },
  { title: "Tokens & Balances", href: "/functions/tokens" },
  { title: "Fees & Price Aggregation", href: "/functions/oraclefees" },
  { title: "Collectibles & NFTs", href: "/functions/collectibles" },
];

export default function HomePage() {
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
          <p>{item.title}</p>
          <a
            href={item.href}
            style={{
              borderRadius: 22,
              background: "#9D4DFA",
              width: 104,
              height: 30,
              color: "white",
            }}
            class="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
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
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 20,
            padding: 10,
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
An immersive wallet solution for games and app developers, with all of web3's benefits and none of the friction          </p>
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
          <IntroLogo />
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
          width: 879,
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
          <AllBlockchains />
        </p>
      </div>
    </div>
  );
}
