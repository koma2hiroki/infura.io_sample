pragma solidity ^0.4.4;

contract Sample {
  int num = 0; // 初期値

  function setter(int _num) external {
    num = _num;
  }

  function getter() external view returns(int) {
    return num;
  }
}
