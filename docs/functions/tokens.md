---
sidebar_position: 3
---

# Tokens/Balances

---

## Get token balance

Based on account address/walletID the amount for each ERC-20 token can be retrieved, and (optionally) converted into FIAT.

:::info
Please note that a total balance for ERC-721 or ERC-1155 is currently not included in the FIAT wallet balance.
:::

```javascript
account.balances[asset];
```

## Get wallet balance

The wallet balance/total can be shown as sum of all assets, or if single token as token total.

```javascript
account.balances[asset];
```

## Update Balances

The update of the balance(s) is triggered by
loading,
automatic intervals, or
if initiated by user.

```javascript
await updateBalances({
  network: activeNetwork,
  walletId: activeWalletId,
  accountIds,
});
```

## Send token

This function will allow to send a single token (native, ERC-20, ERC-721, or ERC-1155) to an account address with the set network fees/handling and out-of-the-box validation and error handling.

Gas fees are automatically calculated and deducted from available token/wallet balance. Alternatively to account address unstoppable domains are accepted.

```javascript
sendTransaction({
  network: "mainnet",
  walletId: "f32a6128-b5f6-4f26-a131-d4a35913d7a7",
  asset: "ARBETH",
  to: "0xb81B9B88e764cb6b4E02c5D0F6D6D9051A61E020",
  accountId: "aa93175d-f1cb-4c64-a921-89631be1ddd4",
  amount: "3000000000000000",
  fee: 0.1,
  feeLabel: "average",
  fiatRate: 1575.01,
});
```

:::info
Please note that batch send transactions for ERC-1155 tokens can be enabled to send multiple in a single native transaction. Further an address book could be used to serve a better UX.
:::

## Receive token(s)

Based on the account address/WalletID (alternatively unstoppable domains) the user is able to transfer tokens/funds into the wallet.
NFTs (ERC-721, or ERC-1155) will be automatically detected, and added to the wallet, based on account address.

## Buy tokens with FIAT on-ramper

Another option to fund the wallet is to purchase cryptocurrencies (or paying gas/transaction fees) with credit or debit card, and other options like Apple Pay, Google Pay, or SEPA transfer, based on availability and settings. Currently supported providers are Transak and Onramper.

Your region will determine which on-ramp provider is available. Further the available tokens can be specified.

:::caution
Please note that the service involves a KYC-process which will need to be completed outside of the wallet API.
:::

## Swap tokens

This functionality allows to easily swap tokens within and across blockchains with the given network fees/handling, if applicable provider related fees, and out-of-the-box validation and error handling.

The current built in providers are a mix of AMMs and bridges/protocols to enable a broad variety of swap pairs. They come with different trade-offs like supported networks, liquidity, security, fees, MIN/MAX, or slippage:

- Uniswap AMM Swaps
- 1inch DEX Aggregator Swaps
- Sovryn FastBTC Relay
- Sovryn AMM Swaps
- Thorchain AMM Swaps
- Astroport AMM Swaps
- Jupiter AMM Swaps
- Hop Exchange Cross-chain Swaps
- deBridge Cross-Chain Swaps
- Li.Fi Advance Bridge & DEX Aggregation Protocol

```javascript
newSwap({
  network: activeNetwork,
  walletId: activeWalletId,
  quote,
  fee: fromNetworkFee,
  claimFee: toNetworkFee,
  feeLabel: fromGasSpeed,
  claimFeeLabel: toGasSpeed,
});
```

:::info
Only providers which can execute will be returned with a quote, and the best rate automatically set as default.

Gas/speed and potential provider fees are automatically calculated and deducted from available token/wallet balance. If cross-chain both network gas fees needs be covered.
:::

Please note that swap providers will be in accordance with selected/available networks.

## Send a batch of transactions

(Coming soon)
