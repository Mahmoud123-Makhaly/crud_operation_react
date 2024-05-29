export const validation = (product: {
  imgSrc: string;
  title: string;
  desc: string;
  price: string;
}) => {
  const imgSrcRGX = /^(ftp|http|https):\/\/[^ "]+$/i;
  const isValidImgSrc = imgSrcRGX.test(product.imgSrc);
  const error: { imgSrc: string; title: string; desc: string; price: string } =
    {
      imgSrc: "",
      title: "",
      desc: "",
      price: "",
    };
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    error.title = "title length must be between 10 and 80";
  }
  if (
    !product.desc.trim() ||
    product.desc.length < 10 ||
    product.desc.length > 900
  ) {
    error.desc = "desc length must be between 10 and 900";
  }
  if (!product.imgSrc.trim() || !isValidImgSrc) {
    error.imgSrc = "invalid imgSrc";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    error.price = "invalid price";
  }
  return error;
};
