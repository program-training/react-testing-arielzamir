import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  test("renders the Form component", () => {
    render(<Form />);

    const labelElement = screen.getByText(/Enter the URL/i);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByLabelText(/Enter the URL/i);
    expect(inputElement).toBeInTheDocument();

    const submitInput = screen.getByRole("button", { name: /submit/i });
    expect(submitInput).toBeInTheDocument();
  });
});
