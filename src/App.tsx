import React, { FormEvent, useCallback, useState } from "react";
import {
  ButtonMaker,
  CircleColor,
  ErrorMessage,
  InputMaker,
  ModalMaker,
  ProductCard,
} from "./components";
import { addProductDetails, colors, data } from "./data";
import { IProduct } from "./interfaces";
import { validation } from "./validation";
import Button from "./components/kimz/Kimz";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState<Array<string>>([]);
  const [num, setNum] = useState(0);
  const inputInitialValues = {
    imgSrc: "",
    title: "",
    desc: "",
    colors: [],
    category: { name: "", imgUrl: "" },

    price: "",
  };
  const [inputVal, setInputVal] = useState<IProduct>(inputInitialValues);
  const [errorMSG, setErrMSG] = useState({
    imgSrc: "",
    title: "",
    desc: "",
    price: "",
  });
  const onCancelHandler = () => {
    setIsOpen(false);
    setInputVal(inputInitialValues);
    setColor([]);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
    setErrMSG({ ...errorMSG, [name]: "" });
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const { title, desc, imgSrc, price } = inputVal;
    const errors = validation({
      title,
      desc,
      imgSrc,
      price,
    });
    const schema =
      Object.values(errors).some((x) => x === "") &&
      Object.values(errors).every((x) => x === "");
    if (!schema) {
      setErrMSG(errors);
      return;
    } else {
      setInputVal(inputInitialValues);
      setIsOpen(false);
    }
  }
  function handleClickColor(item: string): void {
    if (color.includes(item)) {
      return;
    }
    setColor([...color, item]);
  }
  const rgba = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  const increment = () => {
    setNum((prev) => prev + 1);
  };
  const inc = useCallback(increment, [num]);
  return (
    <main className="xl:container">
      {num}
      <Button style={{ backgroundColor: rgba }} onClick={inc}>
        Inreacement
      </Button>
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Latest Products</h3>
        <div className="py-3">
          <ButtonMaker
            text="Build Now"
            className="bg-indigo-500 px-8 py-2 text-white"
            onClick={() => setIsOpen(true)}
          />
          <ModalMaker
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title="Add a New Product"
          >
            {" "}
            <form className="my-4 grid grid-cols-1" onSubmit={handleSubmit}>
              {addProductDetails.map((inputDetail) => (
                <React.Fragment key={inputDetail.id}>
                  <label
                    htmlFor={inputDetail.id}
                    className="cursor-pointer block text-sm font-medium leading-6 text-gray-900"
                  >
                    {inputDetail.label}
                  </label>
                  <InputMaker
                    id={inputDetail.id}
                    type={inputDetail.type}
                    name={inputDetail.name}
                    value={inputVal[inputDetail.name]}
                    onChange={handleChange}
                  />

                  <ErrorMessage message={errorMSG[inputDetail.name]} />
                </React.Fragment>
              ))}
              <div>
                <div className="rounded ">
                  {color.map((color) => (
                    <span
                      className="rounded p-1 m-1 inline-block text-white"
                      style={{ background: color }}
                      key={color}
                    >
                      {color}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2 my-3">
                  {colors.map((item, index) => (
                    <CircleColor
                      key={index}
                      onClick={() => handleClickColor(item)}
                      color={item}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ButtonMaker
                  className="bg-indigo-500 w-full my-2"
                  text="submit"
                />
                <ButtonMaker
                  className="bg-gray-400 w-full hover:bg-gray-600 transition-all"
                  text="cancel"
                  onClick={onCancelHandler}
                  type="button"
                />
              </div>
            </form>
          </ModalMaker>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default App;
