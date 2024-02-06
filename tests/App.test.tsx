import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";

describe("app component", () => {
  it("renders correctly (snapshot)", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
