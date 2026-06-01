/** Paginated list query used across earn / saving endpoints. */
export interface EarnPagedRequest {
  currentPage: number;
  sizePage: number;
}

export interface EarnFlexibleProductListRequest extends EarnPagedRequest {
  coinName?: string;
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

export interface EarnFlexiblePositionsRequest extends EarnPagedRequest {
  coinName?: string;
  productId?: string;
}

export type EarnFlexibleRecordType = 'subscribe' | 'redeem' | 'interest';

export interface EarnFlexibleHistoryRequest extends EarnPagedRequest {
  type: EarnFlexibleRecordType;
  startTime?: number;
  endTime?: number;
  coinName?: string;
}

export interface EarnFixedProductListRequest extends EarnPagedRequest {
  coinName?: string;
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

export interface EarnFixedPositionsRequest extends EarnPagedRequest {
  coinName?: string;
  productId?: string;
}

export type EarnFixedRecordType = 'subscribe' | 'redeem' | 'interest';

export interface EarnFixedHistoryRequest extends EarnPagedRequest {
  type: EarnFixedRecordType;
  startTime?: number;
  endTime?: number;
  coinName?: string;
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
