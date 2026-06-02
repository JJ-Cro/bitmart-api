export interface EarnPagedList<T> {
  total: number;
  list: T[];
}

export interface EarnAccountPosition {
  coinName: string;
  totalUserSum: string;
  totalProfit: string;
  previousProfit: string;
}

export interface EarnSavingTierRate {
  minPurchaseAmount: string;
  maxPurchaseAmount: string;
  apy: string;
}

export interface EarnFlexibleProduct {
  productId: string;
  coinName: string;
  productTag: string;
  apy: string;
  minPurchaseAmount: string;
  maxPurchaseAmount: string;
  additionalApy: string;
  hasTierRate: boolean;
  tierRate?: EarnSavingTierRate[];
}

export interface EarnFlexiblePosition {
  earnId: string;
  productId: string;
  coinId: number;
  coinName: string;
  productTag: string;
  apy: string;
  totalProfit: string;
  autoSubscribe: boolean;
  additionalApy: string;
  hasTierRate: boolean;
  tierRate?: EarnSavingTierRate[];
}

export interface EarnFlexibleHistoryRecord {
  type: string;
  recordId: string;
  productId: string;
  coinName: string;
  amount: string;
  productTag: string;
  time: number;
  subscribeType: string;
  requestNo: string;
  status: string;
}

export interface EarnFixedProduct {
  productId: string;
  coinName: string;
  productTag: string;
  lockDay: number;
  apy: string;
  minPurchaseAmount: string;
  maxPurchaseAmount: string;
  additionalApy: string;
}

export interface EarnFixedPosition {
  earnId: string;
  productId: string;
  coinId: number;
  coinName: string;
  amount: string;
  estimatedInterest: string;
  expiredDate: number;
  productTag: string;
  apy: string;
  lockDay: number;
  totalProfit: string;
  subscribeType: string;
  additionalApy: string;
}

export interface EarnFixedHistoryRecord {
  type: string;
  recordId: string;
  productId: string;
  lockDay: number;
  coinName: string;
  amount: string;
  productTag: string;
  time: number;
  subscribeType: string;
  requestNo: string;
  status: string;
}

export interface EarnAutoSavingBatchStatus {
  batchSubscribeStatus: 'ON' | 'OFF';
}

export interface EarnFlexibleAutoSubscribeStatus {
  subscribeStatus: 'ON' | 'OFF';
}
