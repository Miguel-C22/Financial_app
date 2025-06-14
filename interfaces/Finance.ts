export interface FinanceInfo {
  payment_name: string;
  price: number;
  payment_day: string;
  info: string;
}

export interface Finance extends FinanceInfo {
  id: string;
  user_id: string;
}
