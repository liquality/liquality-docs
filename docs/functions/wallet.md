---
sidebar_position: 1
---

# Create & Auth

---

Liquality Wallet API and SDK relies on Torus wallet tech. This significantly simplifies the onboarding experiences and removes risk of key loss as users do not need to keep track of a seed phrase. Instead, the wallet and authentication is handled by key shares that allow for easy recoverability without compromising security.

### This is how it works:

The keys are managed by creating shares of the private key via Shamir Secret Sharing.

**ShareNumberOne** Could be stored on the user's device, similarly to how you usually can store a private key or seed phrase on a hardware device.

**ShareNumberTwo** could be split across the Web3Auth network, only accessed by a OAuth provider login that the user owns. This could be Google SSO, or any of the other login providers that are currently supported (Facebook, Twitch, Discord)

**ShareNumberThree**
This share is a recovery share, which can be accessed through a users set password

---

Liquality SDK provides different levels of support for the auth and creation.

- Full flow is provided by a UI component that can be embedded and you get login flow + full recovery.

- Programmatic access: easy to use API for login and recovery but the integration with UI happens by the developer. This gives flexibility for any use case.

---

## Recovery

Users need to prove ownership of ⅔ shares in order to retrieve and recover their private key.

That means if you choose to split your shares between Google SSO, device storage and password, you can recover your account using google SSO + the password for example.

## Auth

## Create a wallet

```javascript
const wallet = await createWallet({
  serviceProvider: serviceProvider,
  storageLayer,
  modules: {
    webStorage: webStorageModule,
    securityQuestions: securityQuestionsModule,
    shareTransfer: shareTransferModule,
  },
});
```

## Unlock a wallet with service provider

Unlock wallet with a service provider (Google SSO)

```javascript
const loginResponse = await triggerLogin({
  typeOfLogin: "google",
  verifier: "testnet-verifier",
  clientId:
    "134678854652-vnm7amoq0p23kkpkfviveul9rb26rmgn.apps.googleusercontent.com",
});
```

Parameters:

| Name        | Type   | Description                    |
| ----------- | ------ | ------------------------------ |
| typeOfLogin | string | Type of login to unlock wallet |
| verifier    | string | The verifier of the wallet     |
| clientId    | string | ClientID                       |

## Account

Fetch all related accountdata

```javascript
wallet.state.accounts;
```

```typescript
export enum AccountType {
  Default = "default",
  BitcoinLedgerNativeSegwit = "bitcoin_ledger_nagive_segwit",
  BitcoinLedgerLegacy = "bitcoin_ledger_legacy",
  EthereumLedger = "ethereum_ledger",
  RskLedger = "rsk_ledger",
}

export interface AccountDefinition {
  type: AccountType;
  name: string;
  alias?: string;
  chain: ChainId;
  index: number;
  derivationPath?: string;
  addresses: string[];
  assets: Asset[];
  balances: Record<Asset, string>;
  updatedAt?: number;
  color: string;
  enabled?: boolean;
  chainCode?: string;
  publicKey?: string;
  nfts?: NFT[];
}

export interface AccountInfo {
  derivationPath: string;
  type: string;
  chainCode?: string;
  publicKey?: string;
  address?: string;
}
```
