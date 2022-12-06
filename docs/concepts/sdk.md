---
sidebar_position: 2
displayed_sidebar: mySidebar
---

# SDK

Our wallet SDK can be used to integrate support for cryptocurrency wallets into web3 gaming platforms such as Unity or browser games. This allows users to easily manage and use their digital assets, such as Ethereum and other cryptocurrencies, within the gaming environment. For example, the wallet SDK can be used to add features such as secure authentication and transaction signing to a web3 game, allowing users to securely store and transfer their assets within the game. Additionally, our wallet SDK can be used to enable support for in-game purchases or rewards using cryptocurrencies, providing an additional source of revenue for game developers and enabling users to more easily participate in the growing world of decentralized finance. Overall, incorporating the Liquality wallet SDK into web3 gaming platforms can help to improve user experience and provide additional functionality for both users and developers.

# Wallet

## Auth

## Create

Create a wallet with mnemonic and key

```javascript
await wallet.dispatch.createWallet({
    key: '0x1234567890123456789012345678901234567890',
    mnemonic: TEST_MNEMONIC!,
    imported: true,
  });
```

| Name     | Type    | Description                   |
| -------- | ------- | ----------------------------- |
| key      | string  | Key/password to unlock wallet |
| mnemonic | string  | Seed phrase string            |
| imported | boolean | True/False                    |

Return Values:

| Name | Type | Description |
| ---- | ---- | ----------- |
|      |      |             |

## Unlock

Unlock wallet with given key/password

```javascript
await wallet.dispatch.unlockWallet({
  key: "0x1234567890123456789012345678901234567890",
});
```

Parameters:

| Name | Type   | Description                   |
| ---- | ------ | ----------------------------- |
| key  | string | Key/password to unlock wallet |

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
