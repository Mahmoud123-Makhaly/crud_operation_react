interface IProps {
  imgSrc: string;
  className?: string;
  alt: string;
}
const ImageMaker = (props: IProps) => {
  const { imgSrc ,className , alt } = props;
  return <img src={imgSrc} className={className} alt={alt} />;
};

export default ImageMaker;
