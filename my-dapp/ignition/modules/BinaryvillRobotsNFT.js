const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("BinaryvillRobotsNFTModule", (m) => {

  const BinaryvillRobotsNFT = m.contract("BinaryvillRobotsNFT", []);

  return { BinaryvillRobotsNFT };
});
