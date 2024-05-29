import { IAddProduct, IProduct } from "../interfaces";

export const data: IProduct[] = [
  {
    id: "1",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "2",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "3",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "4",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "5",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "6",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "7",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
  {
    id: "8",
    imgSrc: "car.jpg",
    title: "2022 Gensis Gv70:nomic    ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet molestias dolorum, tenetur .    ",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: { name: "cars", imgUrl: "avatar.jpg" },

    price: "$50,000",
  },
];
export const addProductDetails: IAddProduct[] = [
  {
    id: "title",
    label: "Product Title",
    type: "text",
    name: "title",
  },
  {
    id: "description",
    label: "Product Description",
    type: "text",
    name: "desc",
  },
  {
    id: "ProductImageUrl",
    label: "Product Image Url",
    type: "text",
    name: "imgSrc",
  },
  {
    id: "productPrice ",
    label: "  Product Price ",
    type: "text",
    name: "price",
  },
];
export const colors: string[] = [
  "#FF0000",
  "#00FF00",
  " #0000FF",
  "#A52A2A",
  "#FFA500",
  "#800080",
  "#00FFFF",
];
