const networkConfig = {
    31337: {
        name: 'localhost',
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    42: {
        name: 'kovan',
        ethUsdPriceFeed: '0x9326BFA02ADD2366b30bacB125260Af641031331',
    },
}
// need to add 18 zeroes for decimal values
const INITIAL_SUPPLY = '1000000000000000000000000' //1,000,000 tokens

const developmentChains = ['hardhat', 'localhost']

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
}
