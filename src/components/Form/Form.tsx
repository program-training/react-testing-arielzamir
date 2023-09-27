import { useState, FormEvent } from "react";
import QRCodeComponent from "../QRCodeComponent/QRCodeComponent";

export interface UrlProps {
  url?: string;
  date: null | string;
  size?: number;
}

const Form = () => {
  const [url, setUrl] = useState<string>("");
  const [showQRCode, setShowQRCode] = useState<boolean>(false);
  const [requestTime, setRequestTime] = useState<null | string>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setRequestTime(new Date().toLocaleString());
    setShowQRCode(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>

      {showQRCode && (
        <QRCodeComponent url={url} date={requestTime} size={100} />
      )}
    </>
  );
};

export default Form;
