var proofOfExistence = artifacts.require("./ProofOfExistence1.sol");
var proofOfExistence2 = artifacts.require("./ProofOfExistence2.sol");
var proofOfExistence3 = artifacts.require("./ProofOfExistence3.sol");

module.exports = function(deployer) {
  deployer.deploy(proofOfExistence);
  deployer.deploy(proofOfExistence2);
  deployer.deploy(proofOfExistence3);
};
