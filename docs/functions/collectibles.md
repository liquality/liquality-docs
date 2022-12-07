---
sidebar_position: 2
---

# Collectibles/NFT

Data sources are delivered by providers (Moralis: Ethereum, Polygon, Solana; Covalent 2: Arbitrum). The data provider will deliver the image (otherwise placeholder), NFT name, NFT description, token ID, creator, creator fee, locked, collection description, account address, asset contract, token standard, and the number of copies owned if ERC-1155 is available.

---

## Recieve

The user will automatically receive the NFTs by injection in regard to the account address provided and then shown in the generalized NFT area (regardless of account), or in the account's first position. The detection of the NFTs happens automatically.

## updateNFTs

```javascript
await updateNFTs({
  walletId: activeWalletId,
  network: activeNetwork,
  accountIds: accIds,
});
```

## allNftCollections

After you have called the updateNFTs function, you can now get all the nfts from

```javascript
wallet.getters.allNftCollections;
```

All NFTs can be shown and sorted by collections, with all items grouped, regardless of supported chains and accounts to provide the user with a complete picture of ownership. The total number of NFTs is determined by uniqueness (not counting copies).

## accountNftCollections

:::tip
You can also get NFTs from specific account (Polygon, Arbitrum, Solana, Ethereum etc..) using the accountId
:::

```javascript
wallet.getters.accountNftCollections(accountId);
```

## sendNFTTransaction

Users can send a single NFT (or copy) to another address with enough funds to cover blockchains' speed/fee with out-of-the-box validation and error handling.

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

:::tip
Once the tx is initiated the progress will be tracked (pending vs. completed) and shown to the user with an activity log as well tx details.
:::

## getMarketplaceName

Every NFT is in correlation with a marketplace and can be linked to (OpenSea: Ethereum, Polygon, Stratos: Arbitrum, MagicEden: Solana).

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

## Mark as Favourite

An NFT can be marked as a favorite by a user/wallet, and that attribute is added to the NFT.

```javascript
await codeSnippet();
```

## Sort by favorite NFT within a collection

Marked as favorite NFTs will be placed on top of the collection, so the user can have the favorites faster in sight.

```javascript
await codeSnippet();
```

## Get NFT analytics /soon

(coming soon)

## Show collection/list of favorite NFTs /soon

(coming soon)

## Selling NFTs /soon

(coming soon)

## Minting NFTs /soon

Note: minted NFTs will have a URI (uniform ressource identifier), attributes are not in particular considered and will be mainly defined by design partners

TBD other cases like create NFT from provided asset, create user-generated NFT, list minted NFT, claim minted NFT, target-group related minted NFT

(coming soon)
