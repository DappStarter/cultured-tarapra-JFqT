require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remind method include argue broken section'; 
let testAccounts = [
"0xac01574d616c395ad7e087f88259272a464432bfabcade95bedafdcda5479601",
"0x72f6f0615c6b95e081f9bb389a26ec1d5d3b7d7ccc5b2e172bbce853ebed9d6a",
"0x312e54d7a363a7c45f46d1aaf8ff181cf6b419ef0d3a8adda8a5007051a7ed0e",
"0x85b66f27485499e7c797f1737d79e348bb372506bd020a8c9382667d1fdc0191",
"0xc9178a74d8c7b4c825800b7c6702e9c34db98a2c123aacb077a1e145fbea52bd",
"0x1d43e1a5e80837d04ce4e6dd4fc68c4c7f4a976cb08c7cca7b05d38ad47c6c87",
"0x6405c3d0e5e7ad95d8b983d05f81456fcd0f810fdc620eeb3b1db12c82e6f079",
"0xcdb9a55cfffa757c161afc6cb01b67588d69f7fc519b16b4d9a0602265abd94f",
"0xbae605ba5d296bbb48d7ed16071b1a0175a2a81ad54ac7f4dc31452c5122748b",
"0x7bc43373e0a349e7735559827502a87a2dfe236b56ce2d72224479427f4654bc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


