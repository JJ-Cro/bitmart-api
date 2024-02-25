export type FuturesOpenType = 'cross' | 'isolated';
export interface BaseResult {
  timestamp: number;
  symbol: string;
}

// Define the response data type
export interface GetFuturesContractDetailsResult {
  symbols: {
    symbol: string;
    product_type: number;
    open_timestamp: number;
    expire_timestamp: number;
    settle_timestamp: number;
    base_currency: string;
    quote_currency: string;
    last_price: string;
    volume_24h: string;
    turnover_24h: string;
    index_price: string;
    index_name: string;
    contract_size: string;
    min_leverage: string;
    max_leverage: string;
    price_precision: string;
    vol_precision: string;
    max_volume: string;
    min_volume: string;
    funding_rate: string;
    expected_funding_rate: string;
    open_interest: string;
    open_interest_value: string;
  }[];
}

// Define the response data type
export interface GetFuturesContractDepthResult extends BaseResult {
  asks: [string, string, string][];
  bids: [string, string, string][];
}

// Define the response data type
export interface GetFuturesOpenInterestResult extends BaseResult {
  open_interest: string;
  open_interest_value: string;
}

// Define the response data type
export interface GetFuturesFundingRateResult extends BaseResult {
  rate_value: string;
  expected_rate: string;
}

// Define the response data type
export interface GetFuturesKlinesResult {
  timestamp: number;
  open_price: string;
  close_price: string;
  high_price: string;
  low_price: string;
  volume: string;
}

// Define the response data type
export interface GetFuturesAssetsResult {
  currency: string;
  position_deposit: string;
  frozen_balance: string;
  available_balance: string;
  equity: string;
  unrealized: string;
}

export interface FuturesOrderBase {
  order_id: string;
  client_order_id: string;
  size: string;
  symbol: string;
  state: 1 | 2 | 4; // Adjusted to accommodate all uses
  side: 1 | 2 | 3 | 4;
  leverage: string;
  open_type: FuturesOpenType;
  create_time: number;
  update_time: number;
}

// Extend for GetFuturesOrderResult
export interface GetFuturesOrderResult extends FuturesOrderBase {
  price: string;
  type: 'limit' | 'market' | 'liquidate' | 'bankruptcy' | 'adl';
  deal_avg_price: string;
  deal_size: string;
  // Optional fields
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2;
  executive_order_id?: string;
  preset_take_profit_price_type?: 1 | 2;
  preset_stop_loss_price_type?: 1 | 2;
  preset_take_profit_price?: string;
  preset_stop_loss_price?: string;
}

// Extend for GetFuturesOrderHistoryResult (similar to GetFuturesOrderResult, adjust as needed)
export interface GetFuturesOrderHistoryResult extends FuturesOrderBase {
  price: string;
  type: 'limit' | 'market' | 'liquidate' | 'bankruptcy' | 'adl' | 'trailing';
  deal_avg_price: string;
  deal_size: string;
  // Optional fields similar to GetFuturesOrderResult
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2;
  executive_order_id?: string;
}

// Extend for GetFuturesOpenOrdersResult (similar structure, adjust as needed)
export interface GetFuturesOpenOrdersResult extends FuturesOrderBase {
  price: string;
  type: 'limit' | 'market' | 'trailing';
  deal_avg_price: string;
  deal_size: string;
  // Optional fields similar to GetFuturesOrderResult
  activation_price?: string;
  callback_rate?: string;
  activation_price_type?: 1 | 2;
}

// Extend for GetFuturesPlanOrdersResult with unique fields
export interface GetFuturesPlanOrdersResult extends FuturesOrderBase {
  executive_price: string;
  trigger_price: string;
  mode: number;
  price_way: number;
  price_type: number;
  plan_category: 1 | 2;
  type: 'plan' | 'take_profit' | 'stop_loss';
}


export interface GetFuturesPositionsResult extends BaseResult {
  leverage: string;
  current_fee: string;
  open_timestamp: number;
  current_value: string;
  mark_price: string;
  position_value: string;
  position_cross: string;
  maintenance_margin: string;
  close_vol: string;
  close_avg_price: string;
  open_avg_price: string;
  entry_price: string;
  current_amount: string;
  unrealized_value: string;
  realized_value: string;
  position_type: 1 | 2;
}

export interface GetFuturesTradesResult {
  order_id: string;
  trade_id: string;
  symbol: string;
  side: 1 | 2 | 3 | 4;
  price: string;
  vol: string;
  exec_type: 'Taker' | 'Maker';
  profit: boolean;
  realised_profit: string;
  paid_fees: string;
  create_time: number;
}

export interface GetFuturesTransfersResult {
  records: {
    transfer_id: string;
    currency: string;
    amount: string;
    type: 'spot_to_contract' | 'contract_to_spot';
    state: 'PROCESSING' | 'FINISHED' | 'FAILED';
    timestamp: number;
  }[];
}

export interface SubmitFuturesOrderResult {
  order_id: number;
  price: string; // Note: "market price" for market type orders
}

export interface SubmitFuturesTransferResult {
  currency: string;
  amount: string;
}

export interface SetFuturesLeverageResult {
  symbol: string;
  leverage: string;
  open_type: FuturesOpenType;
  max_value: string; // Maximum leverage
}

export interface GetFuturesSubWalletResult {
  wallet: {
    currency: string; // Token symbol, e.g., 'BTC'
    name: string; // Token name, e.g., 'Bitcoin'
    available: string; // Available Balance
    frozen: string; // Frozen Balance
  }[];
}

export interface GetFuturesSubTransfersResult {
  fromAccount: string;
  toAccount: string;
  toWalletType: 'future';
  fromWalletType: 'future';
  currency: string;
  amount: string;
  submissionTime: number;
}