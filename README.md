
infura.ioを扱うサンプルソースコードです。

[Ethereumホスティングサービス「Infura」の使い方とは？](https://wakuwaku-currency.com/virtual-currency/ethereum/about-use-hosting-service-infura.html)

## フォルダ構成

#### contract

シンプルなSolidityプログラムです。

`contract/contracts/Sample.sol`

#### node

ブロックチェーン上の変数の値をカウントアップするNodeプログラムです。


## 確認方法

※ node.jsをインストールしておいてください。

1. コントラクトのデプロイ
```
cd contract
npm install
./node_modules/truffle/build/cli.bundled.js migrate --network infura
```

最後に `Saving artifacts...` が表示されるのを確認してください。

2. プログラムの起動
```
cd ../node
npm install
node index.js
```

最後に表示される `changed data` の値が1以上になっていれば成功です。

プログラムを動かすごとに値がカウントアップしていきます。


## 注意事項

**ソースコード上に鍵情報が書かれていますが、本来このようなことは絶対に行わないでください！**


また、鍵情報をソースコードに書いてあるため、ETHがなくなる可能性があります。

その場合は、ETHアカウントを作成して、 `config.js` の情報を書き換えてください。

#### 1. アカウントの作成  
https://iancoleman.io/bip39/

- `Coin` に `ETH - Ethereum` を選択
- `Mnemonic Language` の `English` を選択
- `Derived Addresses` の情報をコピー

#### 2. RopstenのETHを手に入れる  
http://faucet.ropsten.be:3001/
