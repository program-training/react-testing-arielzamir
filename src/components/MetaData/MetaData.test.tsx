import { render, screen } from "@testing-library/react";
import MetaData from "./MetaData";

describe("MetaData", () => {
  test("renders MetaData component with provided data", () => {
    const testUrl = "https://example.com";
    const testDate = "2023-01-01";
    const testSize = 200;

    render(<MetaData url={testUrl} date={testDate} size={testSize} />);

    const urlElement = screen.getByText(testUrl);
    const dateElement = screen.getByText(testDate);
    const sizeElement = screen.getByText(testSize.toString());

    expect(urlElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(sizeElement).toBeInTheDocument();
  });
});
