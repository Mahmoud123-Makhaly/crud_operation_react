import React, { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = (props: IProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
