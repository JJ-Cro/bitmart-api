
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
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L240) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L244) |  | GET | `system/service` |
| [getSpotCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L254) |  | GET | `spot/v1/currencies` |
| [getSpotTradingPairsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L260) |  | GET | `spot/v1/symbols` |
| [getSpotTradingPairDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L264) |  | GET | `spot/v1/symbols/details` |
| [getSpotTickersV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L270) |  | GET | `spot/quotation/v3/tickers` |
| [getSpotTickerV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L274) |  | GET | `spot/quotation/v3/ticker` |
| [getSpotLatestKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L280) |  | GET | `spot/quotation/v3/lite-klines` |
| [getSpotHistoryKlineV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L286) |  | GET | `spot/quotation/v3/klines` |
| [getSpotOrderBookDepthV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L292) |  | GET | `spot/quotation/v3/books` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L299) |  | GET | `spot/quotation/v3/trades` |
| [getSpotTickersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L315) |  | GET | `spot/v2/ticker` |
| [getSpotTickerV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L322) |  | GET | `spot/v1/ticker_detail` |
| [getSpotKLineStepsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L331) |  | GET | `spot/v1/steps` |
| [getSpotKlinesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L338) |  | GET | `spot/v1/symbols/kline` |
| [getSpotOrderBookDepthV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L347) |  | GET | `spot/v1/symbols/book` |
| [getAccountBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L359) | :closed_lock_with_key:  | GET | `account/v1/wallet` |
| [getAccountInfoV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L369) | :closed_lock_with_key:  | GET | `uapi-key/v1/account/info` |
| [submitAccountTransferV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L377) | :closed_lock_with_key:  | POST | `account/v1/transfer` |
| [getAccountCurrenciesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L383) |  | GET | `account/v1/currencies` |
| [getSpotWalletBalanceV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L389) | :closed_lock_with_key:  | GET | `spot/v1/wallet` |
| [getAccountDepositAddressV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L395) | :closed_lock_with_key:  | GET | `account/v1/deposit/address` |
| [getAccountWithdrawQuotaV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L401) | :closed_lock_with_key:  | GET | `account/v1/withdraw/charge` |
| [submitWithdrawalV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L407) | :closed_lock_with_key:  | POST | `account/v1/withdraw/apply` |
| [getWithdrawAddressList()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L413) | :closed_lock_with_key:  | GET | `account/v1/withdraw/address/list` |
| [getDepositWithdrawHistoryV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L421) | :closed_lock_with_key:  | GET | `account/v2/deposit-withdraw/history` |
| [getDepositWithdrawDetailV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L427) | :closed_lock_with_key:  | GET | `account/v1/deposit-withdraw/detail` |
| [getMarginAccountDetailsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L433) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/account` |
| [submitMarginAssetTransferV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L439) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/transfer` |
| [getBasicSpotFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L445) | :closed_lock_with_key:  | GET | `spot/v1/user_fee` |
| [getActualSpotTradeFeeRateV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L449) | :closed_lock_with_key:  | GET | `spot/v1/trade_fee` |
| [submitSpotOrderV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L461) | :closed_lock_with_key:  | POST | `spot/v2/submit_order` |
| [submitMarginOrderV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L467) | :closed_lock_with_key:  | POST | `spot/v1/margin/submit_order` |
| [submitSpotBatchOrdersV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L476) | :closed_lock_with_key:  | POST | `spot/v2/batch_orders` |
| [cancelSpotOrderV3()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L482) | :closed_lock_with_key:  | POST | `spot/v3/cancel_order` |
| [submitSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L488) | :closed_lock_with_key:  | POST | `spot/v4/batch_orders` |
| [cancelSpotBatchOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L499) | :closed_lock_with_key:  | POST | `spot/v4/cancel_orders` |
| [cancelAllSpotOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L505) | :closed_lock_with_key:  | POST | `spot/v4/cancel_all` |
| [cancelSpotOrdersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L515) | :closed_lock_with_key:  | POST | `spot/v1/cancel_orders` |
| [getSpotOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L525) | :closed_lock_with_key:  | POST | `spot/v4/query/order` |
| [getSpotOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L534) | :closed_lock_with_key:  | POST | `spot/v4/query/client-order` |
| [getSpotOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L540) | :closed_lock_with_key:  | POST | `spot/v4/query/open-orders` |
| [getSpotHistoricOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L546) | :closed_lock_with_key:  | POST | `spot/v4/query/history-orders` |
| [getSpotAccountTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L555) | :closed_lock_with_key:  | POST | `spot/v4/query/trades` |
| [getSpotAccountOrderTradesV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L564) | :closed_lock_with_key:  | POST | `spot/v4/query/order-trades` |
| [submitSpotAlgoOrderV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L571) | :closed_lock_with_key:  | POST | `spot/v4/algo/submit_order` |
| [cancelSpotAlgoOrderV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L577) | :closed_lock_with_key:  | POST | `spot/v4/algo/cancel_order` |
| [cancelAllSpotAlgoOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L583) | :closed_lock_with_key:  | POST | `spot/v4/algo/cancel_all` |
| [getSpotAlgoOrderByIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L589) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/order` |
| [getSpotAlgoOrderByClientOrderIdV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L595) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/client-order` |
| [getSpotAlgoOpenOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L601) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/open-orders` |
| [getSpotAlgoHistoryOrdersV4()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L607) | :closed_lock_with_key:  | POST | `spot/v4/query/algo/history-orders` |
| [marginBorrowV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L619) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/borrow` |
| [marginRepayV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L625) | :closed_lock_with_key:  | POST | `spot/v1/margin/isolated/repay` |
| [getMarginBorrowRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L631) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/borrow_record` |
| [getMarginRepayRecordV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L637) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/repay_record` |
| [getMarginBorrowingRatesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L646) | :closed_lock_with_key:  | GET | `spot/v1/margin/isolated/pairs` |
| [submitMainTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L661) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-main` |
| [submitSubTransferSubToMainV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L670) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-main` |
| [submitMainTransferMainToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L676) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/main-to-sub` |
| [submitMainTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L682) | :closed_lock_with_key:  | POST | `account/sub-account/main/v1/sub-to-sub` |
| [submitSubTransferSubToSubV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L688) | :closed_lock_with_key:  | POST | `account/sub-account/sub/v1/sub-to-sub` |
| [getSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L694) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/transfer-list` |
| [getAccountSubTransfersV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L700) | :closed_lock_with_key:  | GET | `account/sub-account/v1/transfer-history` |
| [getSubSpotWalletBalancesV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L706) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/wallet` |
| [getSubAccountsV1()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L712) | :closed_lock_with_key:  | GET | `account/sub-account/main/v1/subaccount-list` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L733) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L742) |  | GET | `contract/public/depth` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L751) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L760) |  | GET | `contract/public/funding-rate` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L769) |  | GET | `contract/public/kline` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L784) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L797) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L806) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L815) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L824) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L833) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L842) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L851) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L860) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L871) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L879) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L888) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L897) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L908) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L917) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L926) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L941) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L953) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L965) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L977) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L991) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1003) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1021) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1030) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getEarnAccountPosition()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1042) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/earn` |
| [getFlexibleSavingProducts()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1046) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/product` |
| [subscribeFlexibleSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1052) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe` |
| [redeemFlexibleSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1058) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/redeem` |
| [getFlexibleSavingPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1064) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/earn` |
| [getFlexibleSavingHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1070) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/record` |
| [getFixedSavingProducts()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1076) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/product` |
| [subscribeFixedSaving()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1082) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/subscribe` |
| [getFixedSavingPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1088) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/earn` |
| [getFixedSavingHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1094) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/fixed/record` |
| [redeemFixedSavingEarly()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1100) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/redeem` |
| [updateFixedSavingAutoReinvest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1106) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/fixed/subscribe/operate` |
| [setAutoSavingBatch()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1115) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe/batch/operate` |
| [getAutoSavingBatchStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1124) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/subscribe/batch` |
| [setFlexibleSavingAutoSubscribe()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1128) | :closed_lock_with_key:  | POST | `newearn/cloud/v1/saving/subscribe/operate` |
| [getFlexibleSavingAutoSubscribeStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1137) | :closed_lock_with_key:  | GET | `newearn/cloud/v1/saving/subscribe/status` |
| [getBrokerRebate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/RestClient.ts#L1149) | :closed_lock_with_key:  | GET | `spot/v1/broker/rebate` |

# FuturesClientV2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClientV2.ts](/src/FuturesClientV2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemTime()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L113) |  | GET | `system/time` |
| [getSystemStatus()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L117) |  | GET | `system/service` |
| [getFuturesContractDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L138) |  | GET | `contract/public/details` |
| [getFuturesContractDepth()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L144) |  | GET | `contract/public/depth` |
| [getFuturesMarketTrade()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L150) |  | GET | `contract/public/market-trade` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L157) |  | GET | `contract/public/open-interest` |
| [getFuturesFundingRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L163) |  | GET | `contract/public/funding-rate` |
| [getFuturesFundingRateV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L173) |  | GET | `contract/public/funding-rate-v2` |
| [getFuturesKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L179) |  | GET | `contract/public/kline` |
| [getFuturesMarkPriceKlines()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L185) |  | GET | `contract/public/markprice-kline` |
| [getFuturesFundingRateHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L191) |  | GET | `contract/public/funding-rate-history` |
| [getFuturesLeverageBracket()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L207) |  | GET | `contract/public/leverage-bracket` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L221) | :closed_lock_with_key:  | GET | `contract/private/assets-detail` |
| [getFuturesTradeFeeRate()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L231) | :closed_lock_with_key:  | GET | `contract/private/trade-fee-rate` |
| [getFuturesAccountOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L241) | :closed_lock_with_key:  | GET | `contract/private/order` |
| [getFuturesAccountOrderHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L247) | :closed_lock_with_key:  | GET | `contract/private/order-history` |
| [getFuturesAccountOpenOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L253) | :closed_lock_with_key:  | GET | `contract/private/get-open-orders` |
| [getFuturesAccountPlanOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L259) | :closed_lock_with_key:  | GET | `contract/private/current-plan-order` |
| [getFuturesAccountPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L265) | :closed_lock_with_key:  | GET | `contract/private/position` |
| [getFuturesAccountPositionsV2()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L272) | :closed_lock_with_key:  | GET | `contract/private/position-v2` |
| [getPositionRiskDetails()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L282) | :closed_lock_with_key:  | GET | `contract/private/position-risk` |
| [getFuturesAccountTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L289) | :closed_lock_with_key:  | GET | `contract/private/trades` |
| [getFuturesAccountTransactionHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L295) | :closed_lock_with_key:  | GET | `contract/private/transaction-history` |
| [getFuturesAutoRepayment()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L304) | :closed_lock_with_key:  | GET | `contract/private/auto_repayment` |
| [getFuturesCrossCollateralInterestLog()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L313) | :closed_lock_with_key:  | GET | `contract/private/cross_collateral/interest_log` |
| [getFuturesTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L322) | :closed_lock_with_key:  | GET | `account/v1/transfer-contract-list` |
| [submitFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L330) | :closed_lock_with_key:  | POST | `contract/private/submit-order` |
| [updateFuturesLimitOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L336) | :closed_lock_with_key:  | POST | `contract/private/modify-limit-order` |
| [cancelFuturesOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L345) | :closed_lock_with_key:  | POST | `contract/private/cancel-order` |
| [cancelAllFuturesOrders()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L351) | :closed_lock_with_key:  | POST | `contract/private/cancel-orders` |
| [cancelAllFuturesOrdersAfter()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L357) | :closed_lock_with_key:  | POST | `contract/private/cancel-all-after` |
| [closeAllFuturesPositions()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L368) | :closed_lock_with_key:  | POST | `contract/private/close-all-position` |
| [submitFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L374) | :closed_lock_with_key:  | POST | `contract/private/submit-plan-order` |
| [cancelFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L382) | :closed_lock_with_key:  | POST | `contract/private/cancel-plan-order` |
| [submitFuturesTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L388) | :closed_lock_with_key:  | POST | `account/v1/transfer-contract` |
| [submitFuturesFundingAccountTransfer()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L398) | :closed_lock_with_key:  | POST | `contract/private/account/v1/transfer` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L404) | :closed_lock_with_key:  | POST | `contract/private/submit-leverage` |
| [submitFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L410) | :closed_lock_with_key:  | POST | `contract/private/submit-tp-sl-order` |
| [updateFuturesPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L419) | :closed_lock_with_key:  | POST | `contract/private/modify-plan-order` |
| [updateFuturesPresetPlanOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L427) | :closed_lock_with_key:  | POST | `contract/private/modify-preset-plan-order` |
| [updateFuturesTPSLOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L440) | :closed_lock_with_key:  | POST | `contract/private/modify-tp-sl-order` |
| [submitFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L448) | :closed_lock_with_key:  | POST | `contract/private/submit-trail-order` |
| [cancelFuturesTrailOrder()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L456) | :closed_lock_with_key:  | POST | `contract/private/cancel-trail-order` |
| [setPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L465) | :closed_lock_with_key:  | POST | `contract/private/set-position-mode` |
| [getPositionMode()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L474) | :closed_lock_with_key:  | GET | `contract/private/get-position-mode` |
| [submitFuturesSubToMainTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L486) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/sub-to-main` |
| [submitFuturesMainToSubTransferFromMain()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L495) | :closed_lock_with_key:  | POST | `account/contract/sub-account/main/v1/main-to-sub` |
| [submitFuturesSubToMainSubFromSub()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L504) | :closed_lock_with_key:  | POST | `account/contract/sub-account/sub/v1/sub-to-main` |
| [getFuturesSubWallet()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L513) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/wallet` |
| [getFuturesSubTransfers()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L524) | :closed_lock_with_key:  | GET | `account/contract/sub-account/main/v1/transfer-list` |
| [getFuturesSubTransferHistory()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L533) | :closed_lock_with_key:  | GET | `account/contract/sub-account/v1/transfer-history` |
| [getFuturesAffiliateRebates()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L548) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-list` |
| [getFuturesAffiliateTrades()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L554) | :closed_lock_with_key:  | GET | `contract/private/affiliate/trade-list` |
| [getFuturesAffiliateRebateUser()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L564) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-user` |
| [getFuturesAffiliateInviteCheck()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L574) | :closed_lock_with_key:  | GET | `contract/private/affiliate/invite-check` |
| [getFuturesAffiliateCustomerInfo()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L584) | :closed_lock_with_key:  | GET | `contract/private/affiliate/aff-customer-info` |
| [getFuturesAffiliateRebateInviteUser()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L598) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-inviteUser` |
| [getFuturesAffiliateRebateApi()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L612) | :closed_lock_with_key:  | GET | `contract/private/affiliate/rebate-api` |
| [getFuturesAffiliateDepositWithdrawalList()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L622) | :closed_lock_with_key:  | GET | `contract/private/affiliate/deposit-withdrawal-list` |
| [submitFuturesSimulatedClaim()](https://github.com/tiagosiebler/bitmart-api/blob/master/src/FuturesClientV2.ts#L647) | :closed_lock_with_key:  | POST | `contract/private/claim` |