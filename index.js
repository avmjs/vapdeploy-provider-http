// require web3
const Web3ProviderInstance = require('web3');

// ethdeploy HTTP provider
const ethdeployHTTPProvider = function(providerObject) {
  // setup http provider instance
  const web3Provider = new Web3ProviderInstance.providers.HttpProvider(`${providerObject.host}:${providerObject.port}`);

  // return web3 provider
  return web3Provider;
};

module.exports = ethdeployHTTPProvider;
