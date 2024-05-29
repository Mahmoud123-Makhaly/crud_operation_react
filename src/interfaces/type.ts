export interface IProduct {
  id?: string;
  imgSrc: string;
  title: string;
  desc: string;
  price: string;

  colors?: Array<string>;
  category?: { name: string; imgUrl: string };
}

export interface IAddProduct {
  id: string;
  name: "title" | "desc" | "imgSrc" | "price";
  label: string;
  type: string;
}
