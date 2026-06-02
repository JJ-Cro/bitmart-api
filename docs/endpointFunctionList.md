
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bitmart-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bitmart-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [RestClient](#RestClientts)
- [FuturesClientV2](#FuturesClientV2ts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# RestClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [RestClient.ts](/src/RestClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L237) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L241) |  | GET | `system/service` |
| [getSpotCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L251) |  | GET | `spot/v1/currencies` |
| [getSpotTradingPairsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L257) |  | GET | `spot/v1/symbols` |
| [getSpotTradingPairDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L261) |  | GET | `spot/v1/symbols/details` |
| [getSpotTickersV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L267) |  | GET | `spot/quotation/v3/tickers` |
| [getSpotTickerV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L271) |  | GET | `spot/quotation/v3/ticker` |
| [getSpotLatestKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L277) |  | GET | `spot/quotation/v3/lite-klines` |
| [getSpotHistoryKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L283) |  | GET | `spot/quotation/v3/klines` |
| [getSpotOrderBookDepthV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L289) |  | GET | `spot/quotation/v3/books` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L296) |  | GET | `spot/quotation/v3/trades` |
| [getSpotTickersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L312) |  | GET | `spot/v2/ticker` |
| [getSpotTickerV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L319) |  | GET | `spot/v1/ticker_detail` |
| [getSpotKLineStepsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L328) |  | GET | `spot/v1/steps` |
| [getSpotKlinesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L335) |  | GET | `spot/v1/symbols/kline` |
| [getSpotOrderBookDepthV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L344) |  | GET | `spot/v1/symbols/book` |
| [getAccountBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L356) | :closed_lock_with_key:  | GET | `account/v1/wallet` |
| [getAccountCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L362) |  | GET | `account/v1/currencies` |
| [getSpotWalletBalanceV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L368) | :closed_lock_with_key:  | GET | `spot/v1/wallet` |
| [getAccountDepositAddressV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L374) | :closed_lock_with_key:  | GET | `account/v1/deposit/address` |
| [getAccountWithdrawQuotaV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L380) | :closed_lock_with_key:  | GET | `account/v1/withdraw/charge` |
| [submitWithdrawalV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L386) | :closed_lock_with_key:  | POST | `account/v1/withdraw/apply` |
| [getWithdrawAddressList()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L392) | :closed_lock_with_key:  | GET | `account/v1/withdraw/address/list` |
| [getDepositWithdrawHistoryV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L400) | :closed_lock_with_key:  | GET | `account/v2/deposit-withdraw/history` |
| [getDepositWithdrawDetailV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L406) | :closed_lock_with_key:  | GET | `account/v1/deposit-withdraw/detail` |
| [getMarginAccountDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L412) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/account` |
| [submitMarginAssetTransferV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L418) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/transfer` |
| [getBasicSpotFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L424) | :closed_lock_with_key:  | GET | `spot/v1/user_fee` |
| [getActualSpotTradeFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L428) | :closed_lock_with_key:  | GET | `spot/v1/trade_fee` |
| [submitSpotOrderV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L440) | :closed_lock_with_key:  | POST | `spot/v2/submit_order` |
| [submitMarginOrderV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L446) | :closed_lock_with_key:  | POST | `spot/v1/margin/submit_order` |
| [submitSpotBatchOrdersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L455) | :closed_lock_with_key:  | POST | `spot/v2/batch_orders` |
| [cancelSpotOrderV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L461) | :closed_lock_with_key:  | POST | `spot/v3/cancel_order` |
| [submitSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L467) | :closed_lock_with_key:  | POST | `spot/v4/batch_orders` |
| [cancelSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L478) | :closed_lock_with_key:  | POST | `spot/v4/cancel_orders` |
| [cancelAllSpotOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L484) | :closed_lock_with_key:  | POST | `spot/v4/cancel_all` |
| [cancelSpotOrdersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L494) | :closed_lock_with_key:  | POST | `spot/v1/cancel_orders` |
| [getSpotOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L504) | :closed_lock_with_key:  | POST | `spot/v4/query/order` |
| [getSpotOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L513) | :closed_lock_with_key:  | POST | `spot/v4/query/client-order` |
| [getSpotOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L519) | :closed_lock_with_key:  | POST | `spot/v4/query/open-orders` |
| [getSpotHistoricOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L525) | :closed_lock_with_key:  | POST | `spot/v4/query/history-orders` |
| [getSpotAccountTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L534) | :closed_lock_with_key:  | POST | `spot/v4/query/trades` |
| [getSpotAccountOrderTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L543) | :closed_lock_with_key:  | POST | `spot/v4/query/order-trades` |
| [submitSpotAlgoOrderV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L550) | :closed_lock_with_key:  | POST | `spot/v4/algo/submit_order` |
| [cancelSpotAlgoOrderV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L556) | :closed_lock_with_key:  | POST | `spot/v4/algo/cancel_order` |
| [cancelAllSpotAlgoOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L562) | :closed_lock_with_key:  | POST | `spot/v4/algo/cancel_all` |
| [getSpotAlgoOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L568) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/order` |
| [getSpotAlgoOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L574) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/client-order` |
| [getSpotAlgoOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L580) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/open-orders` |
| [getSpotAlgoHistoryOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L586) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/history-orders` |
| [marginBorrowV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L598) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/borrow` |
| [marginRepayV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L604) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/repay` |
| [getMarginBorrowRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L610) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/borrow_record` |
| [getMarginRepayRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L616) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/repay_record` |
| [getMarginBorrowingRatesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L625) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/pairs` |
| [submitMainTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L640) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-main` |
| [submitSubTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L649) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-main` |
| [submitMainTransferMainToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L655) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/main-to-sub` |
| [submitMainTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L661) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-sub` |
| [submitSubTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L667) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-sub` |
| [getSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L673) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/transfer-list` |
| [getAccountSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L679) | :closed_lock_with_key:  | GET | `account/sub-account/v1/transfer-history` |
| [getSubSpotWalletBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L685) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/wallet` |
| [getSubAccountsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L691) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/subaccount-list` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L712) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L721) |  | GET | `contract/public/depth` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L730) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L739) |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L748) |  | GET | `contract/public/kline` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L763) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L776) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L785) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L794) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L803) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L812) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L821) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L830) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L839) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L850) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L858) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L867) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L876) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L887) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L896) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L905) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L920) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L932) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L944) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L956) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L970) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L982) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1000) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1009) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getEarnAccountPosition()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1021) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/earn` |
| [getFlexibleSavingProducts()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1025) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/product` |
| [subscribeFlexibleSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1031) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe` |
| [redeemFlexibleSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1037) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/redeem` |
| [getFlexibleSavingPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1043) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/earn` |
| [getFlexibleSavingHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1049) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/record` |
| [getFixedSavingProducts()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1055) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/product` |
| [subscribeFixedSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1061) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/subscribe` |
| [getFixedSavingPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1067) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/earn` |
| [getFixedSavingHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1073) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/record` |
| [redeemFixedSavingEarly()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1079) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/redeem` |
| [updateFixedSavingAutoReinvest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1085) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/subscribe/operate` |
| [setAutoSavingBatch()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1094) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe/batch/operate` |
| [getAutoSavingBatchStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1103) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/subscribe/batch` |
| [setFlexibleSavingAutoSubscribe()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1107) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe/operate` |
| [getFlexibleSavingAutoSubscribeStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1116) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/subscribe/status` |
| [getBrokerRebate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1128) | :closed_lock_with_key:  | GET | `spot/v1/broker/rebate` |

# FuturesClientV2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClientV2.ts](/src/FuturesClientV2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L109) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L113) |  | GET | `system/service` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L134) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L140) |  | GET | `contract/public/depth` |
| [getFuturesMarketTrade()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L146) |  | GET | `contract/public/market-trade` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L153) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L159) |  | GET | `contract/public/funding-rate` |
| [getFuturesFundingRateV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L169) |  | GET | `contract/public/funding-rate-v2` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L175) |  | GET | `contract/public/kline` |
| [getFuturesMarkPriceKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L181) |  | GET | `contract/public/markprice-kline` |
| [getFuturesFundingRateHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L187) |  | GET | `contract/public/funding-rate-history` |
| [getFuturesLeverageBracket()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L203) |  | GET | `contract/public/leverage-bracket` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L217) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesTradeFeeRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L227) | :closed_lock_with_key:  | GET | `contract/private/trade-fee-rate` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L237) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L243) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L249) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L255) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L261) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getFuturesAccountPositionsV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L268) | :closed_lock_with_key:  | GET | `contract/private/position-v2` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L278) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L285) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesAccountTransactionHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L291) | :closed_lock_with_key:  | GET | `contract/private/transaction-history` |
| [getFuturesAutoRepayment()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L300) | :closed_lock_with_key:  | GET | `contract/private/auto_repayment` |
| [getFuturesCrossCollateralInterestLog()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L309) | :closed_lock_with_key:  | GET | `contract/private/cross_collateral/interest_log` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L318) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L326) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [updateFuturesLimitOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L332) | :closed_lock_with_key:  | POST | `contract/private/modify-limit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L341) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L347) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [cancelAllFuturesOrdersAfter()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L353) | :closed_lock_with_key:  | POST | `contract/private/cancel-all-after` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L360) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L368) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L374) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L380) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L386) | :closed_lock_with_key:  | POST | `contract/private/submit-tp-sl-order` |
| [updateFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L395) | :closed_lock_with_key:  | POST | `contract/private/modify-plan-order` |
| [updateFuturesPresetPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L403) | :closed_lock_with_key:  | POST | `contract/private/modify-preset-plan-order` |
| [updateFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L416) | :closed_lock_with_key:  | POST | `contract/private/modify-tp-sl-order` |
| [submitFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L424) | :closed_lock_with_key:  | POST | `contract/private/submit-trail-order` |
| [cancelFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L432) | :closed_lock_with_key:  | POST | `contract/private/cancel-trail-order` |
| [setPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L441) | :closed_lock_with_key:  | POST | `contract/private/set-position-mode` |
| [getPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L450) | :closed_lock_with_key:  | GET | `contract/private/get-position-mode` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L462) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L471) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L480) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L489) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L500) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L509) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L524) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L530) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getFuturesAffiliateRebateUser()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L540) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-user` |
| [getFuturesAffiliateCustomerInfo()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L550) | :closed_lock_with_key:  | GET | `contract/private/affiliate/aff-customer-info` |
| [getFuturesAffiliateRebateInviteUser()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L564) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-inviteUser` |
| [getFuturesAffiliateRebateApi()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L578) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-api` |
| [getFuturesAffiliateDepositWithdrawalList()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L588) | :closed_lock_with_key:  | GET | `contract/private/affiliate/deposit-withdrawal-list` |
| [submitFuturesSimulatedClaim()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L613) | :closed_lock_with_key:  | POST | `contract/private/claim` |