export interface cardDataTypes {
  level: string;
  price: number;
  yearlyPrice: number;
  storage: string;
  user: string;
  sendsize: string;
  bgcolor: string;
}

export interface props {
  checked: boolean;
}

export interface CardPropsTypes {
  cardInfo: cardDataTypes[];
  index: number;
  info?: {};
  checked: boolean;
}
