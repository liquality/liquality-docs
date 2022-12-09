import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          padding: 10,
        }}
      >
        {" "}
        <h1>My react page</h1>
        <p>React and docosaurus is goood</p>
      </div>
    </Layout>
  );
}
