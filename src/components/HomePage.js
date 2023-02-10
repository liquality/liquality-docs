import React from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";

import IntroLogoDark from "../../static/img/intro_illustration.svg";
import IntroLogoLight from "../../static/img/intro_illustration_light.svg";

import AllBlockchains from "../../static/img/all_blockchains.svg";
//import SolanaLight from "../../static/img/solana_lightmode.svg";
import SolanaDark from "../../static/img/solana_dark.svg";

import Avax from "../../static/img/avax.svg";
import Opt from "../../static/img/opt.svg";
import Arb from "../../static/img/arb.svg";

import Bnb from "../../static/img/bnb.svg";
import Polygon from "../../static/img/polygon.svg";
import Near from "../../static/img/near.svg";
import Rsk from "../../static/img/rsk.svg";
import Eth from "../../static/img/eth.svg";
import Bitcoin from "../../static/img/bitcoin.svg";
import BtnArrowDarkMode from "../../static/img/button.svg";
import BtnArrowLightMode from "../../static/img/button_lightmode.svg";

//Light mode
import NftByAccountLight from "../../static/img/nft_by_account_light.svg";
import NftByWalletLight from "../../static/img/nft_by_wallet_light.svg";
import SendNftLight from "../../static/img/send_nft_light.svg";
import MintNftLight from "../../static/img/mint_nft_light.svg";
import AccountBalLight from "../../static/img/accountbal_light.svg";
import TotalFiatLight from "../../static/img/total_fiat_light.svg";
import SwapLight from "../../static/img/swap_light.svg";
import SendLight from "../../static/img/send_light.svg";
import TransactionFeesLight from "../../static/img/transaction_fees_light.svg";

//Dark mode
import NftByAccountDark from "../../static/img/nft_by_account_dark.svg";
import NftByWalletDark from "../../static/img/nft_by_wallet_dark.svg";
import SendNftDark from "../../static/img/send_nft_dark.svg";
import MintNftDark from "../../static/img/mint_nft_dark.svg";
import AccountBalDark from "../../static/img/accountbal_dark.svg";
import TotalFiatDark from "../../static/img/total_fiat_dark.svg";
import SwapDark from "../../static/img/swap_dark.svg";
import SendDark from "../../static/img/send_dark.svg";
import TransactionFeesDark from "../../static/img/transaction_fees_dark.svg";

const listToLoop = [
  {
    title: (
      <p>
        Create <br /> & Auth
      </p>
    ),
    href: "/auth",
  },
  {
    title: (
      <p>
        Tokens & <br /> Balances
      </p>
    ),
    href: "/tokens",
  },
  {
    title: (
      <p>
        Fees and Price <br /> Aggregation
      </p>
    ),
    href: "/swap",
  },
  {
    title: (
      <p>
        Collectibles <br /> & NFTs
      </p>
    ),
    href: "/collectibles",
  },
];

let logoStyle = {};
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
    logo: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
          fill="black"
        />
        <path
          d="M21.9812 18.0776L19.6596 20.5206C19.6091 20.5737 19.548 20.616 19.4802 20.6449C19.4123 20.6738 19.3391 20.6887 19.2652 20.6887H8.25951C8.207 20.6887 8.15563 20.6736 8.11172 20.6454C8.0678 20.6171 8.03326 20.5769 8.01233 20.5297C7.9914 20.4824 7.98499 20.4302 7.99389 20.3794C8.0028 20.3286 8.02663 20.2815 8.06246 20.2438L10.3858 17.8008C10.4362 17.7479 10.497 17.7056 10.5647 17.6767C10.6323 17.6478 10.7053 17.6328 10.7791 17.6327H21.7841C21.8366 17.6327 21.888 17.6478 21.9319 17.676C21.9758 17.7043 22.0103 17.7445 22.0313 17.7918C22.0522 17.839 22.0586 17.8912 22.0497 17.942C22.0408 17.9928 22.017 18.0399 21.9812 18.0776ZM19.6596 13.158C19.6091 13.1049 19.548 13.0626 19.4802 13.0337C19.4123 13.0048 19.3391 12.9899 19.2652 12.9899H8.25951C8.207 12.9899 8.15563 13.005 8.11172 13.0333C8.0678 13.0615 8.03326 13.1017 8.01233 13.149C7.9914 13.1962 7.98499 13.2485 7.99389 13.2993C8.0028 13.35 8.02663 13.3971 8.06246 13.4348L10.3858 15.8779C10.4362 15.9308 10.497 15.973 10.5647 16.0019C10.6323 16.0308 10.7053 16.0458 10.7791 16.0459H21.7841C21.8366 16.0459 21.888 16.0309 21.9319 16.0026C21.9758 15.9744 22.0103 15.9341 22.0313 15.8869C22.0522 15.8396 22.0586 15.7874 22.0497 15.7366C22.0408 15.6859 22.017 15.6387 21.9812 15.601L19.6596 13.158ZM8.25951 11.4032H19.2652C19.3391 11.4032 19.4123 11.3883 19.4802 11.3594C19.548 11.3305 19.6091 11.2882 19.6596 11.2351L21.9812 8.79205C22.017 8.75438 22.0408 8.70726 22.0497 8.65648C22.0586 8.6057 22.0522 8.55347 22.0313 8.50622C22.0103 8.45896 21.9758 8.41873 21.9319 8.39048C21.888 8.36222 21.8366 8.34717 21.7841 8.34717H10.7791C10.7053 8.34729 10.6323 8.36227 10.5647 8.39118C10.497 8.42009 10.4362 8.46232 10.3858 8.51525L8.06305 10.9583C8.02726 10.9959 8.00344 11.043 7.99452 11.0937C7.98559 11.1444 7.99195 11.1966 8.01281 11.2439C8.03366 11.2911 8.06812 11.3313 8.11194 11.3596C8.15576 11.3879 8.20705 11.403 8.25951 11.4032Z"
          fill="url(#paint0_linear_1097_1495)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1097_1495"
            x1="9.17712"
            y1="20.9828"
            x2="20.4737"
            y2="8.00423"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.08" stop-color="#9945FF" />
            <stop offset="0.3" stop-color="#8752F3" />
            <stop offset="0.5" stop-color="#5497D5" />
            <stop offset="0.6" stop-color="#43B4CA" />
            <stop offset="0.72" stop-color="#28E0B9" />
            <stop offset="0.97" stop-color="#19FB9B" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "SOLANA",
  },
];

export default function HomePage() {
  const { colorMode } = useColorMode();

  const listToLoopAPI = [
    {
      graphic:
        colorMode === "dark" ? <NftByAccountDark /> : <NftByAccountLight />,
      title: "NFT Collection by Account",
      href: "/walletapi/account-nft-collections",
    },
    {
      graphic:
        colorMode === "dark" ? <NftByWalletDark /> : <NftByWalletLight />,
      title: "NFT Collection by Wallet",
      href: "/walletapi/account-nft-collections",
    },
    {
      graphic: colorMode === "dark" ? <SendNftDark /> : <SendNftLight />,
      title: "Send NFT",
      href: "/walletapi/send-nft-transaction",
    },
    {
      graphic: colorMode === "dark" ? <MintNftDark /> : <MintNftLight />,
      title: "Mint NFT",
      href: "/walletapi/mint-nft",
    },
    {
      graphic: colorMode === "dark" ? <AccountBalDark /> : <AccountBalLight />,
      title: "Accounts with Balance",
      href: "/walletapi/accounts-with-balance",
    },
    {
      graphic: colorMode === "dark" ? <TotalFiatDark /> : <TotalFiatLight />,
      title: "Total FIAT Balance",
      href: "/walletapi/total-fiat-balance",
    },
    {
      graphic: colorMode === "dark" ? <SwapDark /> : <SwapLight />,
      title: "Swap",
      href: "/walletapi/swap",
    },
    {
      graphic: colorMode === "dark" ? <SendDark /> : <SendLight />,
      title: "Send",
      href: "/walletapi/send",
    },
    {
      graphic:
        colorMode === "dark" ? (
          <TransactionFeesDark />
        ) : (
          <TransactionFeesLight />
        ),
      title: "Transaction Fees",
      href: "/walletapi/get-send-tx-fees",
    },
  ];

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
            paddingLeft: 30,
            marginBottom: 50,
            marginRight: index === 3 ? 0 : 130,
          }}
        >
          <p
            style={{
              marginTop: -23,

              fontWeight: "normal",
            }}
          >
            {item.title}
          </p>
          <a
            href={item.href}
            style={{
              color: "white",
            }}
          >
            {colorMode === "dark" ? (
              <BtnArrowDarkMode style={{}} />
            ) : (
              <BtnArrowLightMode style={{}} />
            )}
          </a>
        </div>
      );
    });

    return (
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="row">{rows}</div>
      </div>
    );
  };

  const _renderWalletAPI = () => {
    let rows = [];

    rows = listToLoopAPI.map((item, index) => {
      return (
        <div
          className="col-12 d-flex justify-content-center align-items-center"
          key={index}
        >
          <a
            href={item.href}
            style={{
              marginBottom: 50,
            }}
            className="button"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <p
                style={{
                  fontFamily: "Montserrat",

                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: 14,

                  color: colorMode === "dark" ? "white" : "#000D35",
                }}
              >
                {item.title}
              </p>
              {item.graphic}
            </div>
            <div
              style={{
                marginTop: 20,
                width: 275,
                borderBottom: "1px solid grey",
              }}
            ></div>
          </a>
        </div>
      );
    });

    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
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
            alignItems: "center",
            width: "5%",
            margin: "0 10px",
          }}
        >
          {item.logo}
          <p
            style={{
              marginTop: index === 9 ? 20 : 15,
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: 9,
              letterSpacing: 0.5,
              color: colorMode === "dark" ? "#FFFFFF" : "#000000",
            }}
          >
            {item.title}
          </p>
        </div>
      );
    });

    return (
      <div
        className="container-fluid"
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.14)",
          border: "1px solid #000D35",
          borderRadius: 28,
          marginTop: 30,
          padding: 30,
          paddingLeft: 50,
          boxShadow: colorMode === "dark" ? null : "5px 5px black",
          display: "flex",
          flexDirection: "column",
          marginBottom: 60,
          justifyContent: "space-evenly",
          //alignItems: "center",
        }}
      >
        <div>
          <div className="col-sm-12">
            <p
              style={{
                fontSize: 13,
                marginBottom: 5,
              }}
            >
              {" "}
              <br></br>
              <b>SUPPORTED BLOCKCHAINS</b>
              <br></br>
              <br></br>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {rows}
            </div>
          </div>
        </div>
      </div>
    );
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
        }}
        className="d-flex d-sm-none"
      >
        <div className="container-fluid d-flex flex-column text-center">
          <p
            className="display-4 font-weight-bold mb-2"
            style={{
              fontSize: 40,
              fontFamily: "Montserrat",
              fontWeight: "bold",
              marginBottom: 10,
              lineHeight: 1,
              marginTop: 160,
            }}
          >
            <b>Web3 Wallet API & SDK</b>
          </p>
          <p className="lead">
            An immersive wallet solution for games and app developers, with all
            of web3's benefits and none of the friction
          </p>
          <a
            href="/overview/whatIsWalletApiSdk"
            style={{
              borderRadius: 22,
              background: "#9D4DFA",
              width: 150,
              padding: 15,
              color: "white",
            }}
            class="button"
          >
            Learn more
          </a>
        </div>

        {/*     <BrowserOnly>
          {() => {
            window.innerWidth > 900 ? (
              <div className="d-none d-sm-block">
                {console.log(window.innerWidth, "innerwid")}

                {colorMode === "dark" ? <IntroLogoDark /> : <IntroLogoLight />}
              </div>
            ) : null;
          }}
        </BrowserOnly> */}

        <div className="">
          {colorMode === "dark" ? <IntroLogoDark /> : <IntroLogoLight />}
        </div>
      </div>
      <h1 style={{ marginBottom: 50, marginTop: 20 }}>Wallet SDK</h1>
      {_renderWalletSdkNavigationRow()}
      {_renderSupportedBlockchains()}

      <h1 style={{ marginBottom: 50 }}>Wallet APIs</h1>
      {_renderWalletAPI()}
    </div>
  );
}
