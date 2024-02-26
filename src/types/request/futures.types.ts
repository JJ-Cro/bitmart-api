export interface GetFuturesKlinesRequest {
  symbol: string;
  start_time: number;
  end_time: number;
  step?: number;
}

export interface FuturesOrderRequest {
  symbol: string;
  order_id: string;
}

export interface GetFuturesOrderHistoryRequest {
  symbol: string;
  start_time?: number;
  end_time?: number;
}

export interface GetFuturesOpenOrdersRequest {
  symbol?: string;
  type?: 'limit' | 'market' | 'trailing';
  order_state?: 'all' | 'partially_filled';
  limit?: number;
}

export interface GetFuturesPlanOrdersRequest {
  symbol?: string;
  type?: 'limit' | 'market';
  limit?: number;
}

export interface GetFuturesTradesRequest {
  symbol: string;
  start_time?: number;
  end_time?: number;
}

export interface GetFuturesTransfersRequest {
  currency?: string;
  time_start?: number;
  time_end?: number;
  page: number;
  limit: number;
  recvWindow?: number;
}

export interface SubmitFuturesOrderRequest {
  symbol: string;
  client_order_id?: string;
  side: 1 | 2 | 3 | 4; 
  mode?: 1 | 2 | 3 | 4; 
  type?: 'limit' | 'market' | 'trailing';
  leverage: string;
  open_type: 'cross' | 'isolated';
  size: number;
  price?: string;
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

export interface SubmitFuturesPlanOrderRequest {
  symbol: string;
  type?: 'limit' | 'market' | 'take_profit' | 'stop_loss';
  side: 1 | 2 | 3 | 4;
  leverage: string;
  open_type: 'cross' | 'isolated';
  mode?: 1 | 2 | 3 | 4;
  size: number;
  trigger_price: string;
  executive_price?: string;
  price_way: 1 | 2;
  price_type: 1 | 2;
  plan_category?: 1 | 2;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

export interface SubmitFuturesTransferRequest {
  currency: string; // Only USDT is supported
  amount: string; // Transfer amount, allowed range[0.01,10000000000]
  type: 'spot_to_contract' | 'contract_to_spot';
  recvWindow?: number; // Trade time limit, allowed range (0,60000], default: 5000 milliseconds
}

export interface SetFuturesLeverageRequest {
  symbol: string; // Symbol of the contract(like BTCUSDT)
  leverage?: string; // Order leverage
  open_type: 'cross' | 'isolated'; // Open type, required at close position
}

export interface TransferFuturesAssetsRequest {
  requestNo: string; // UUID, unique identifier, max length 64
  amount: string; // Transfer amount
  currency: 'USDT'; // Currently only USDT is supported
  subAccount: string; // Sub-Account username
}

export interface SubmitFuturesSubToMainSubFromSubRequest {
  requestNo: string; // UUID, unique identifier, max length 64
  amount: string; // Transfer amount
  currency: 'USDT'; // Currently only USDT is supported
}

export interface GetFuturesSubWalletRequest {
  subAccount: string; // Sub-Account username
  currency?: string; // Currency is optional
}

export interface GetFuturesSubTransfersRequest {
  subAccount: string;
  limit: number; // Range [1,100]
}

export interface GetFuturesAffiliateRebatesRequest {
  user_id: number;
  page: number;
  size: number;
  start_time?: number;
  end_time?: number;
}

export interface GetFuturesAffiliateTradesRequest
  extends GetFuturesAffiliateRebatesRequest {
  type: 1 | 2;
}
