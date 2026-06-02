export interface EarnFlexibleProductListRequest {
  coinName?: string;
  currentPage: number;
  sizePage: number;
}

export interface EarnFlexibleSubscribeRequest {
  productId: string;
  amount: string;
  /** Unique request key, 20 digits (0-9 only) */
  requestNo: string;
}

export interface EarnFlexibleRedeemRequest {
  earnId: string;
  amount: string;
  requestNo: string;
}

export interface EarnFlexiblePositionsRequest {
  coinName?: string;
  productId?: string;
  currentPage: number;
  sizePage: number;
}

export type EarnFlexibleRecordType = 'subscribe' | 'redeem' | 'interest';

export interface EarnFlexibleHistoryRequest {
  type: EarnFlexibleRecordType;
  startTime?: number;
  endTime?: number;
  coinName?: string;
  currentPage: number;
  sizePage: number;
}

export interface EarnFixedProductListRequest {
  coinName?: string;
  currentPage: number;
  sizePage: number;
}

export type EarnFixedAutoSubscribeAction =
  | 'OFF'
  | 'REINVEST_FLEXIBLE'
  | 'REINVEST_FIXED';

export interface EarnFixedSubscribeRequest {
  productId: string;
  amount: string;
  requestNo: string;
  autoSubscribe: EarnFixedAutoSubscribeAction;
}

export interface EarnFixedPositionsRequest {
  coinName?: string;
  productId?: string;
  currentPage: number;
  sizePage: number;
}

export type EarnFixedRecordType = 'subscribe' | 'redeem' | 'interest';

export interface EarnFixedHistoryRequest {
  type: EarnFixedRecordType;
  startTime?: number;
  endTime?: number;
  coinName?: string;
  currentPage: number;
  sizePage: number;
}

export interface EarnFixedEarlyRedeemRequest {
  earnId: string;
  requestNo: string;
}

export interface EarnFixedAutoReinvestUpdateRequest {
  earnId: string;
  autoSubscribe: EarnFixedAutoSubscribeAction;
}

export type EarnAutoSavingBatchAction = 'open' | 'close';

export interface EarnAutoSavingBatchOperateRequest {
  autoSubscribe: EarnAutoSavingBatchAction;
}

export interface EarnFlexibleAutoSubscribeOperateRequest {
  productId: string;
  autoSubscribe: EarnAutoSavingBatchAction;
}

export interface EarnFlexibleAutoSubscribeStatusRequest {
  productId: string;
}
