export interface SpotKlineV3Request {
  symbol: string;
  before?: number;
  after?: number;
  step?: number;
  limit?: number;
}

export interface SpotKlinesV1Request {
  symbol: string;
  from: number;
  to: number;
  step?: number;
}

export interface SpotOrderBookDepthV1Request {
  symbol: string;
  precision?: string;
  size?: number;
}

export interface SubmitWithdrawalV1Request {
  currency: string;
  amount: string;
  destination: 'To Digital Address';
  address: string;
  address_memo?: string;
}

export interface DepositWithdrawHistoryV2Request {
  currency?: string;
  operation_type: 'deposit' | 'withdraw';
  start_time?: number;
  end_time?: number;
  N: number;
}

export interface SubmitMarginTransferV1Request {
  symbol: string;
  currency: string;
  amount: string;
  side: 'in' | 'out';
}

export interface SubmitSpotOrderV2Request {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'limit' | 'market' | 'limit_maker' | 'ioc';
  stpmode?: 'none' | 'cancel_maker' | 'cancel_taker' | 'cancel_both';
  client_order_id?: string;
  size?: string;
  price?: string;
  notional?: string;
}

export type CancelOrdersV3Request = {
  symbol: string;
  order_id?: string;
  client_order_id?: string;
} & ({ order_id: string } | { client_order_id: string });

export interface SubmitSpotBatchOrdersV4Request {
  symbol: string;
  orderParams: {
    clientOrderId?: string;
    size?: string;
    price?: string;
    side: 'buy' | 'sell';
    type: 'limit' | 'market' | 'limit_maker' | 'ioc';
    stpmode?: 'none' | 'cancel_maker' | 'cancel_taker' | 'cancel_both';
    notional?: string;
  }[];
  recvWindow?: number;
}

export interface CancelSpotBatchOrdersV4Request {
  symbol: string;
  orderIds?: string[];
  clientOrderIds?: string[];
  recvWindow?: number;
}

export interface SpotOrderByIdV4Request {
  orderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

export interface SpotOrderByClientOrderIdV4Request {
  clientOrderId: string;
  queryState?: 'open' | 'history';
  recvwindow?: number;
}

export interface SpotOpenOrdersV4Request {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

export interface SpotOrderTradeHistoryV4Request {
  orderMode?: 'spot' | 'iso_margin'; // Order mode: 'spot' for spot trade, 'iso_margin' for isolated margin trade
  startTime?: number; // Start time in milliseconds, e.g., 1681701557927
  endTime?: number; // End time in milliseconds, e.g., 1681701557927
  limit?: number; // Number of queries, allowed range [1,200], default is 200
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
  symbol?: string; // Trading pair, e.g., BTC_USDT
}

export interface MarginBorrowRepayV1Request {
  symbol: string;
  currency: string;
  amount: string;
}

export interface MarginBorrowRecordsV1Request {
  symbol: string;
  start_time?: number;
  end_time?: number;
  N?: number;
  borrow_id?: string;
}

export interface MarginRepayRecordsV1Request {
  symbol: string;
  start_time?: number;
  end_time?: number;
  N?: number;
  repay_id?: string;
  currency?: string;
}

export interface SubmitSubTransferSubToMainV1Request {
  requestNo: string;
  amount: string;
  currency: string;
}

export interface SubmitSubTransferV1Request {
  requestNo: string;
  amount: string;
  currency: string;
  subAccount: string;
}

export interface SubmitMainTransferSubToSubV1Request {
  requestNo: string;
  amount: string;
  currency: string;
  fromAccount: string;
  toAccount: string;
}

export interface SubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
  accountName?: string;
}

export interface AccountSubTransfersV1Request {
  moveType: 'spot to spot';
  N: number;
}

export interface SubSpotWalletBalancesV1Request {
  subAccount: string;
  currency?: string;
}

export interface SpotBrokerRebateRequest {
  start_time?: number;
  end_time?: number;
}

/** Spot algo order (v4): TP/SL or trigger. See `POST spot/v4/algo/submit_order`. */
export interface SubmitSpotAlgoOrderV4Request {
  symbol: string;
  side: 'buy' | 'sell';
  type: 'tp/sl' | 'trigger';
  client_order_id?: string;
  trigger_price?: string;
  trigger_type?: 'limit' | 'market';
  price?: string;
  notional?: string;
  size?: string;
}

export interface CancelSpotAlgoOrderV4Request {
  symbol: string;
  order_id: string;
  type: 'tp/sl' | 'trigger';
}

export interface CancelAllSpotAlgoOrdersV4Request {
  symbol?: string;
  type: 'tp/sl' | 'trigger';
}

export interface SpotAlgoOrderByIdV4Request {
  orderId: string;
  queryState?: 'open' | 'history';
  recvWindow?: number;
}

export interface SpotAlgoOrderByClientOrderIdV4Request {
  clientOrderId: string;
  queryState?: 'open' | 'history';
  recvWindow?: number;
}

export interface SpotAlgoOpenOrdersV4Request {
  symbol?: string;
  orderMode?: 'trigger' | 'tp/sl';
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}

export interface SpotAlgoHistoryOrdersV4Request {
  symbol?: string;
  orderMode?: 'trigger' | 'tp/sl';
  startTime?: number;
  endTime?: number;
  limit?: number;
  recvWindow?: number;
}
