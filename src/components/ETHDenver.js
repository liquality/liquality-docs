import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function ETHDenver() {
  const { colorMode } = useColorMode();

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
                marginTop: 20,
                width: 275,
                borderBottom: "1px solid grey",
              }}
            ></div>
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
        }}
        className="d-flex d-sm-none"
      >
        ETH DENVER COMING SOON
      </div>
    </div>
  );
}
