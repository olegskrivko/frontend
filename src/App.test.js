import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cooking is easy react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/cooking is easy/i);
  expect(linkElement).toBeInTheDocument();
});
