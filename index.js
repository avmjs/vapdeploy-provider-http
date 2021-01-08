// require web3
const Web3ProviderInstance = require('web3');

// vapdeploy HTTP provider
const vapdeployHTTPProvider = function(providerObject) {
  // setup http provider instance
  const web3Provider = new Web3ProviderInstance.providers.HttpProvider(`${providerObject.host}:${providerObject.port}`);

  // return web3 provider
  return web3Provider;
};

module.exports = vapdeployHTTPProvider;
