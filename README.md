
infura.ioを扱うサンプルソースコードです。

[Ethereumホスティングサービス「Infura」の使い方とは？](https://wakuwaku-currency.com/virtual-currency/ethereum/about-use-hosting-service-infura.html)

## フォルダ構成

#### contracts

コントラクト側プログラムです。

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

プログラムを動かすごとにカウントアップしていきます。


## 注意事項

ソースコード上に鍵情報が書かれていますが、本来このようなことは絶対に行わないでください！
