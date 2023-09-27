import { UrlProps } from "../Form/Form";

const MetaData = ({ url, date, size }: UrlProps) => {
  return (
    <>
      <div>{url}</div>
      <div>{date}</div>
      <div>{size}</div>
    </>
  );
};

export default MetaData;
