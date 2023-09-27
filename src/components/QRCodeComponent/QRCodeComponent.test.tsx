import { render, screen } from "@testing-library/react";
import QRCodeComponent from "./QRCodeComponent";

describe("QRCodeComponent", () => {
  test("renders QRCodeComponent with provided data", () => {
    const testUrl = "https://example.com";
    const testDate = "2023-01-01";
    const testSize = 200;

    render(<QRCodeComponent url={testUrl} date={testDate} size={testSize} />);

    const qrCodeImage = screen.getByAltText("QR Code");
    expect(qrCodeImage).toBeInTheDocument();
    expect(qrCodeImage).toHaveAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?data=${testUrl}`
    );

    const dateElement = screen.getByText(testDate);
    const sizeElement = screen.getByText(testSize.toString());

    expect(dateElement).toBeInTheDocument();
    expect(sizeElement).toBeInTheDocument();
  });
});
