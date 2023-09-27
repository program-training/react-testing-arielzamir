import { UrlProps } from "../Form/Form";
import MetaData from "../MetaData/MetaData";

const QRCodeComponent = ({ url, date, size }: UrlProps) => (
  <>
    <img
      src={`https://api.qrserver.com/v1/create-qr-code/?data=${url}`}
      alt="QR Code"
    />
    <MetaData date={date} size={size} />
  </>
);

export default QRCodeComponent;
