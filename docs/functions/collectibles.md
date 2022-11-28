---
sidebar_position: 2
---

# Collectibles/NFT

## updateNFTs

```javascript
await updateNFTs({
  walletId: activeWalletId,
  network: activeNetwork,
  accountIds: accIds,
});
```

After you have called the updateNFTs function, you can now get all the nfts from

```javascript
wallet.getters.allNftCollections;
```

:::tip
You can also get NFTs from specific account (Polygon, Arbitrum, Solana, Ethereum etc..) using the accountId
:::

```javascript
wallet.getters.accountNftCollections(accountId);
```

## sendNFTTransaction

```javascript
export const sendNFTTransaction = async({
  network,
  accountId,
  walletId,
  receiver,
  values,
  fee,
  feeLabel,
  nft,
});
```

## getMarketplaceName

```javascript
getMarketplaceName(asset: Asset, network: Network)
```

Return values:

| Name | Type   | Description          |
| ---- | ------ | -------------------- |
| name | string | Nft marketplace name |

## getNftTransferLink

```javascript
export const getNftTransferLink = (asset: Asset, network: Network, tokenId: string, contract_address: string)

```

Return values:

| Name | Type   | Description                     |
| ---- | ------ | ------------------------------- |
| link | string | Nft transfer link (marketplace) |
