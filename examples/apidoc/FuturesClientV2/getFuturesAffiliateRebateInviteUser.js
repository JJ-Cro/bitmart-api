const { FuturesClientV2 } = require('bitmart-api');

// This example shows how to call this bitmart API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "bitmart-api" for bitmart exchange
// This bitmart API SDK is available on npm via "npm install bitmart-api"
// ENDPOINT: contract/private/affiliate/rebate-inviteUser
// METHOD: GET
// PUBLIC: NO

const client = new FuturesClientV2({
  apiKey: 'yourAPIKeyHere',
  apiSecret: 'yourAPISecretHere',
  apiMemo: 'yourAPIMemoHere',
});

client
  .getFuturesAffiliateRebateInviteUser({
    start_time: 1000000000,
    end_time: 2000000000,
    page: 1,
    size: 10,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
