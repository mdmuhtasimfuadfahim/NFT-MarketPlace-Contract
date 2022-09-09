async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const nftMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const deployNftMarketPlace = await nftMarketPlace.deploy();

  await deployNftMarketPlace.deployed();

  //verify: npx hardhat verify --bsctestnet rinkeby DEPLOYED_CONTRACT_ADDRESS
  console.log("NFTMarketPlace contract deployed address: ", deployNftMarketPlace.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

