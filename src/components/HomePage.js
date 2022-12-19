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

  const listToLoopAPI = [
    {
      graphic: isDarkTheme ? <NftByAccountDark /> : <NftByAccountLight />,
      title: "NFT Collection by Account",
      href: "/walletapi/account-nft-collections",
    },
    {
      graphic: isDarkTheme ? <NftByWalletDark /> : <NftByWalletLight />,
      title: "NFT Collection by Wallet",
      href: "/walletapi/account-nft-collections",
    },
    {
      graphic: isDarkTheme ? <SendNftDark /> : <SendNftLight />,
      title: "Send NFT",
      href: "/walletapi/send-nft-transaction",
    },
    {
      graphic: isDarkTheme ? <MintNftDark /> : <MintNftLight />,
      title: "Mint NFT",
      href: "/walletapi/mint-nft",
    },
    {
      graphic: isDarkTheme ? <AccountBalDark /> : <AccountBalLight />,
      title: "Accounts with Balance",
      href: "/walletapi/accounts-with-balance",
    },
    {
      graphic: isDarkTheme ? <TotalFiatDark /> : <TotalFiatLight />,
      title: "Total FIAT Balance",
      href: "/walletapi/total-fiat-balance",
    },
    {
      graphic: isDarkTheme ? <SwapDark /> : <SwapLight />,
      title: "Swap",
      href: "/walletapi/swap",
    },
    {
      graphic: isDarkTheme ? <SendDark /> : <SendLight />,
      title: "Send",
      href: "/walletapi/send",
    },
    {
      graphic: isDarkTheme ? <TransactionFeesDark /> : <TransactionFeesLight />,
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
            marginBottom: 50,
            marginRight: 105,
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
          >
            {isDarkTheme ? (
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
        style={{ width: "100%", display: "flex", flexDirection: "row" }}
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
                  fontWeight: "600",
                  fontSize: 14,

                  color: isDarkTheme ? "white" : "#000D35",
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

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {rows}
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
              fontWeight: "800",
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            Web3 Wallet API & SDK
          </p>
          <p className="lead">
            An immersive wallet solution for games and app developers, with all
            of web3's benefits and none of the friction
          </p>
          <a
            href="/overview/whatIsWalletApiSdk"
            className="btn btn-primary btn-lg"
            style={{
              borderRadius: 22,
              background: "#9D4DFA",
              width: 140,
              padding: 10,
              color: "white",
            }}
          >
            Learn more
          </a>
        </div>
        {window?.innerWidth > 800 ? (
          <div className="d-none d-sm-block">
            {isDarkTheme ? <IntroLogoDark /> : <IntroLogoLight />}
          </div>
        ) : null}
      </div>

      <h1 style={{ marginBottom: 50, marginTop: 20 }}>Wallet SDK</h1>

      {_renderWalletSdkNavigationRow()}

      <div
        className="container-fluid"
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.14)",
          border: "1px solid #000D35",
          borderRadius: 28,
          marginTop: 30,
          padding: 30,
          boxShadow: isDarkTheme ? null : "5px 5px black",
          display: "flex",
          flexDirection: "column",
          marginBottom: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-sm-12">
            <p
              style={{
                fontSize: 13,
              }}
            >
              {" "}
              <b>SUPPORTED BLOCKCHAINS</b>
              <br></br>
              <br></br>
              {_renderSupportedBlockchains()}
            </p>
          </div>
        </div>
      </div>
      <h1 style={{ marginBottom: 50 }}>Wallet APIs</h1>
      {_renderWalletAPI()}
    </div>
  );
}
