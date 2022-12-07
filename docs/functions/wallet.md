---
sidebar_position: 1
---

# Create/Auth

---

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
