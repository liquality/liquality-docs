---
sidebar_position: 1
displayed_sidebar: mySidebar

slug: /
---

# Introduction

Our goal is to allow developers to easily integrate with wallets, where the wallet becomes as invisible as possible to the user but remains non custodial if/when the user requires full control.

We have built our wallet libraries to be fully self-custodial, extensible so others can build on top (i.e. LiFi, DeBridge, and others have already integrated into them) and multi chain / chain agnostic from the start. We will become the underlying infrastructure for in-app wallets, and are building a self-custodial, extensible, censorship-resistant wallet API network on top of our existing wallet libraries.

## Wallet API/SDK

![walletDiagram](https://media.discordapp.net/attachments/980926180318384148/1049399471533981776/image.png?width=793&height=568)

A wallet API and SDK provides the necessary tools and resources that crypto companies need to develop their own
customized wallet application. It allows them to integrate their wallet into their existing product or platform, giving them the opportunity to securely store, send, and receive digital assets. The SDK simplifies the setup process, provides detailed documentation and tutorials, and offers a secure and robust framework for building custom wallets. This way, crypto companies can create innovative products and services that meet the needs of their customers.

## Supported functions:

- **Wallet:** auth, create, import, account
- **Tokens:** balance, send, receive, swap
- **Collectibles:** hold, send, receive, mint
- Reading the chain (balances, blocks, transactions)
- Wallet address retrieval
- Signing messages
- Sending transactions
- Getting recommended fees
- Updating a transaction's fees

---

## NFT

The Liquality NFT API can manage collections of standardized NFTs (ERC-721, and ERC-1155) on multiple chains (atm: Ethereum, Polygon, Solana, and Arbitrum). The user gets easy access to NFTs whether in one place or related to the account, and is able to send, receive, and check stats.
