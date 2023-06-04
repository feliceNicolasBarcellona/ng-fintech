export interface Card {
  _id: string;
  number?: string;
  ownerId: string;
  owner: string;
  type: "Visa" | "Mastercard";
  amount: number;
}
