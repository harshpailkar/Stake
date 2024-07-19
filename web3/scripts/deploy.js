const hre = require("hardhat");

async function main() {
  //STAKING CONTRACT
  const tokenStaking = await hre.ethers.deployContract("TokenStaking");
  await tokenStaking.waitForDeployment();

  //TOKEN CONTRACT
  const sage = await hre.ethers.deployContract("Sage");
  await sage.waitForDeployment();

  //CONTRACT ADDRESS
  console.log(` STACKING: ${tokenStaking.target}`);
  console.log(` TOKEN: ${sage.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
