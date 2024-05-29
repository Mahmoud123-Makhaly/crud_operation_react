interface IProps {
  message: string;
}
const ErrorMessage = (props: IProps) => {
  const { message } = props;
  return message && <p className="text-red-500">{message}</p>;
};

export default ErrorMessage;
