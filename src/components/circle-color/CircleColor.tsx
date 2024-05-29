import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  color: string;
}
const CircleColor = (props: IProps) => {
  const { color, ...rest } = props;
  return (
    <div
      className="w-5 h-5 rounded-full cursor-pointer"
      {...rest}
      style={{ background: color }}
    ></div>
  );
};

export default CircleColor;
