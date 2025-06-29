// types/Transaction.ts
export interface Transaction {
  id: number;
  date: string;
  amount: number;
  category: string;
  status: "Paid" | "Unpaid" | "Pending";
  user_id: string;
  user_name: string;
  user_profile: string;
}
