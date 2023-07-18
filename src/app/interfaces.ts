export interface IUserList {
  id: number;
  username: string;
  sex: string;
  address: string;
  name: string;
  email: string;
  birthday: string;
}

export interface ITableColumn {
  columnKey: string;
  columnName: string;
  image?: boolean;
  nestedColumns?: string[];
}

export interface IProductList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IProductRating;
}

export interface IProductRating {
  rate: number;
  count: number;
}
