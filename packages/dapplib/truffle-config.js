require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name reward stick color hunt slice tail giggle'; 
let testAccounts = [
"0xc3b44ad9715ccf7add925ffb15c183f19c675e1fb2b4830485af601bcd057ffc",
"0xb168203c261d5bae0874a98249b5313947359b6741a34b06e64d84c0984b15e2",
"0xbbb5ffc3d93e01b976c427dc7ab321fdf669b8bc2fdf6e6cfa9255b7d147faae",
"0xb6dac5ba0bc6827326f1052832824c619d5746913696b913749f430ca1a277e4",
"0xd13929f2c7731137547acf6f605a4f5ce171deb54b5dc50aebbe0ba8ac142020",
"0x220d23243c4b8332597091383f8d62e20686ea8921b6667b06f630f5babb8682",
"0x9f0b44e93e3bd3a80ae124852449b5240c90b0765200b60ea61da6275e4dce2e",
"0xcd14acc02edc2b0fd072e9665746b7e44d516c360646124a56a4ce2064d83e89",
"0xe28e7315e7fbe9cf28a7d4472a475453486898ca4a1a87b5b20027703ee0ae6f",
"0x51c257ee1449a8d8a0df575ae3b2b3e3e9d90a9717dae5db5486261b43e1ee46"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
