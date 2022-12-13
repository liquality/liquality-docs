---
sidebar_position: 7
---

# Fees & Price Aggregation

Fees vary in regard to the type of transaction, blockchain, and/or provider involved.

In regard to blockchain, some of the fees can be calculated as average speed/fee assumption (aka estimated), and the maximum. Toward the user, there can be presets used, or the option to customize. Some blockchains like Solana have fixed fees.

Available funds need to cover all fees to meet the precondition to start initiating a transaction; otherwise, validation/error handling will be triggered if not an alternative option to pay gas fees is provided.

This is our example text, maybe add a paragraph describing oraclefees here.

---

## getSendTxFees

(token or NFT)

In relation to the network, it will provide presets (slow, average, fast), and an additional option to customize it. The default speed/fee can be defined, e.g. average.

EVM-related networks are based on the EIP-1559 gas price standard. The user can be shown estimated and max fees.
Networks like Solana (without fee priority) provide a fixed fee per transaction, therefore there are no selectable/customizable options, and
for Bitcoin it's already included.

The fees can be shown with the amount of the necessary gas token, and/or FIAT.

```javascript
await getSendTxFees(accountId: AccountId, asset: Asset, amount?: BN, customFee?: FeeType)
```

## getSwapTxFees

This function will return the total amount of fees plus any additional fees set by the provider for a swap transaction. The fees will be retrieved from the rates provided by the providers, protocols, or bridges.

Depending on the set-up swap pair, fees returned can be in relation to one or two networks, and involve more than one token.
Dependent on the network fees are whether included, fix (no gas fee priorities), or come as selectable presets/customizable.

The fees can be shown with the amount of the necessary gas token, and/or FIAT.

```javascript
await getSwapTxFees(fromAsset: string, toAsset: string, amount?: BN, customFee?: FeeType)
```

## updateTransactionFee

Speed-up swap transactions

If enabled the user is able to speed up defined transactions before any or a certain amount of confirmations hit the blockchain. The new speed/fee needs to be higher and will replace the previously chosen one.

```javascript
await updateTransactionFee({
  id,
  network: activeNetwork,
  walletId: activeWalletId,
  asset,
  hash,
  newFee,
});
```

## getQuotes

Retrieve quotes that correspond to the passed in asset parameters

```javascript
await getQuotes = async (
  from: string,
  to: string,
  amount: BigNumber,
):
```

## Get FIAT conversion from coingecko

To present balances, quotes, rates, and fees in a more user-friendly way the equivalent of the token value will be shown in FIAT if available on coingecko.

```javascript
await getPrices(baseCurrencies: string[], toCurrency: string)
```

```javascript
await getCurrenciesInfo(baseCurrencies: string[]):
```

## updateFees

```javascript
await wallet.dispatch.updateFees({
  asset: "AVAX",
});
```

## updateMarketData

```javascript
await updateMarketData({
  network: activeNetwork,
});
```

## updateFiatRates

```javascript
  await
    updateFiatRates({
      assets: wallet.getters.networkAssets as string[],
    })
```

## Pay fees with FIAT /soon

Coming soon

## Feeless txn /soon

Coming soon

:::caution
More info to be added
:::
