# starling-qif

Node.js module to convert between transactions (or feedItems) returned from the [Starling Bank API](https://developer.starlingbank.com/docs) and [QIF (Quicken Interchange Format)](https://en.wikipedia.org/wiki/Quicken_Interchange_Format) for importing into accountancy packages.

I created this module for use in an AWS lambda to convert transactions from my business Starling Bank Account and email them  monthly (via SNS) to my accountant for importing into their finance system.

```js
const Starling = require('starling-developer-sdk');
const {toQIF} = require('starling-qif');

// get feed items from Starling API
const client = new Starling({...});
const {feedItems} = await client.account.getFeedItemsBetween({...});

// convert them to qif
const qif = toQIF(feedItems);
console.log(qif);
```

## Installation

```bash
$ npm install starling-qif
```
