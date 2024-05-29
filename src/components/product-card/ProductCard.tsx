import { ButtonMaker } from "../ui/button-maker";
import { ImageMaker } from "../image-maker";
import { IProduct } from "../../interfaces";
import { textSlice } from "../../utils";

interface IProductCardProps {
  product: IProduct;
}
const ProductCard = ({ product }: IProductCardProps) => {
  const { category, desc, imgSrc, price, title } = product;
  return (
    <div className="p-2 border my-2  rounded-md flex flex-col gap-3">
      <ImageMaker alt={imgSrc} className="rounded-md" imgSrc="car.jpg" />
      <h3>{title} </h3>

      {textSlice(desc)}
      <div className="flex space-x-3">
        <span className={`w-5 h-5 bg-red-500 rounded-full  cursor-pointer`} />
        <span className={`w-5 h-5 bg-green-500 rounded-full  cursor-pointer`} />

        <span
          className={`w-5 h-5 bg-indigo-500 rounded-full  cursor-pointer`}
        />
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-indigo-500 font-bold">{price}</h1>
        <ImageMaker
          alt="avatar"
          className="w-10 h-10 rounded-full object-center"
          imgSrc={category?.imgUrl ?? ""}
        />
      </div>
      <div className="flex items-center justify-between space-x-2">
        <ButtonMaker text="Edit" className="bg-indigo-700" width="w-full" />
        <ButtonMaker text="  Delete" className="bg-red-700" width="w-full" />
      </div>
    </div>
  );
};

export default ProductCard;
