---
sidebar_position: 1
displayed_sidebar: mySidebar
---

# Create Wallet

```javascript
import { setupWallet } from "@liquality/wallet-core";
import defaultOptions from "@liquality/wallet-core/dist/src/walletOptions/defaultOptions"; // Default options

const wallet = setupWallet({
  ...defaultOptions,
});

(async () => {
  await wallet.dispatch.createWallet({
    key: "satoshi",
    mnemonic: "never gonna give you up never gonna let you down never gonna",
    imported: true,
  });
  await wallet.dispatch.unlockWallet({ key: "satoshi" });
  await wallet.dispatch.changeActiveNetwork({ network: "mainnet" });
  console.log(wallet.state); // State will include default accounts
})();
```
