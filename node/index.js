
// 定義
const NETWORK = 3;
const config = require("../config");
const Tx = require('ethereumjs-tx');
const Web3 = require('web3');
const web3 = new Web3(config.url);

// コントラクト生成
const SampleSolcJson = require('../contract/build/contracts/Sample.json');
const SampleSolc = new web3.eth.Contract(SampleSolcJson.abi, SampleSolcJson.networks[NETWORK].address);
let SampleMethodAbi;

// 処理開始
var data = {}; // 共通オブジェクト
Promise.resolve().then(() => {
  // 現在値 の確認
  return SampleSolc.methods.getter().call().then((_) => {
    SampleMethodAbi = SampleSolc.methods.setter(parseInt(_) + 1).encodeABI();
    console.log(`now data : ${_}`);
  });

}).then(() => {
  // gasPrice の確認
  return web3.eth.getGasPrice().then((_) => {
    data.gasPrice = web3.utils.toHex(_ * 100);
    console.log(`gasPrice : ${_} / ${web3.utils.fromWei(_ ,'Gwei')} `);
  });

}).then(() => {
  // nonce の確認
  return web3.eth.getTransactionCount(config.account.address).then((_) => {
    data.nonce = _;
    console.log(`transactionCount : ${_}`);
  });

}).then(() => {
  // gasLimit の確認
  return web3.eth.estimateGas({
    to: SampleSolcJson.networks[NETWORK].address,
    data: SampleMethodAbi
  }).then((_) => {
    data.gasLimit = web3.utils.toHex(_);
    console.log(`gasLimit : ${_}`);
  });

}).then(() => {
  var rawTx = {
    nonce: data.nonce,
    gasPrice: data.gasPrice,
    gasLimit: data.gasLimit,
    to: SampleSolcJson.networks[NETWORK].address,
    data: SampleMethodAbi
  };
  const tx = new Tx(rawTx);
  tx.sign(new Buffer(config.account.privateKey, 'hex'));
  const serializedTx = tx.serialize();

  // データの送信
  return web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', function(hash) {
    console.log("hash:", hash);
  }).on('receipt', function(hash) {
    console.log("receipt:", hash);
  }).catch(console.log);

}).then(() => {
  // 変更されているか確認
  return SampleSolc.methods.getter().call().then((_) => {
    console.log(`changed data : ${_}`);
  });
}).catch(console.log);
