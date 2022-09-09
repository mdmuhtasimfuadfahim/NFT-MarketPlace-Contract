const { network } = require("hardhat");
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  let nftMarketPlace = await deploy("NFTMarketPlace", {
    from: deployer,
    log: true,
  });
};
module.exports.tags = ["NFT"];