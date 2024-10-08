/** @type import('hardhat/config').HardhatUserConfig */
require('@nomicfoundation/hardhat-ethers');

module.exports = {
	solidity: '0.8.27',
	paths: {
		sources: './hardhat/contracts',
		tests: './hardhat/test'
	}
};
