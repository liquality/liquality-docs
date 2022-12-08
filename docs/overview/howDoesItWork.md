---
sidebar_position: 2
displayed_sidebar: mySidebar
---

# How does it work?

---

We have built our wallet libraries to be fully self-custodial, extensible so others can build on top (i.e. LiFi, DeBridge, and others have already integrated into them) and multi-chain/chain agnostic from the start.

![walletDiagram](https://media.discordapp.net/attachments/980926180318384148/1049399471533981776/image.png?width=793&height=568)

We will become the underlying infrastructure for in-app wallets, and are building a self-custodial, extensible, censorship-resistant wallet API network on top of our existing wallet libraries.

A standard cryptographic key provider unique to the user and application is produced by the SDK. You can sign transactions, messages, and many other wallet interactions with this key provider.
