import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  children?: React.ReactNode;
  width?: "w-full" | "w-fit";
}
const ButtonMaker = (props: IProps) => {
  const { className, text, children, width = "full", ...rest } = props;

  return (
    <button
      className={`${className} ${width}    py-2 rounded text-white font-bold`}
      {...rest}
    >
      {text ? text : children}
    </button>
  );
};

export default ButtonMaker;
