import React from "react";
import Layout from "@theme/Layout";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        padding: 10,
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
          }}
        >
          web3 Wallet API & SDK
        </p>
        <p>
          A frictionless and immersive solution for games and apps with all the
          web3 benefits, and fully user-owned
        </p>
        <a
          href="/overview/whatIsWalletApiSdk"
          style={{
            borderRadius: 22,
            background: "#9D4DFA",
            width: "30%",
            padding: 10,
            color: "white",
          }}
          class="button"
        >
          Learn more
        </a>
      </div>
      <div
        style={{
          width: 600,
          height: 300,
        }}
      ></div>
    </div>
  );
}
