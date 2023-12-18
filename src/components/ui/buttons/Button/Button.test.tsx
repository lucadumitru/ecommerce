import { render, screen } from "@testing-library/react";

import { BUTTON_TEST_IDS, Button, CartIcon } from "@/components/ui";
import type { ButtonProps } from "@/components/ui";

const buttonProps = {
  onClick: jest.fn()
} satisfies ButtonProps;

describe("Button variant", () => {
  test("should correct show solid variant when provided", () => {
    const solidClasses = "bg-dark-blue hover:bg-blue text-white disabled:bg-light-gray py-2";
    render(<Button {...buttonProps} variant="solid" />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(solidClasses);
  });
  test("should correct show outline variant when provided", () => {
    const outlineClasses =
      "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]";
    render(<Button {...buttonProps} variant="outline" />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(outlineClasses);
  });
});

describe("Button children", () => {
  test("should display provided children", () => {
    render(<Button {...buttonProps}>test</Button>);

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).toHaveTextContent("test");
  });
  test("should not display children if not provided ", () => {
    render(<Button {...buttonProps} />);

    const children = screen.queryByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).not.toHaveTextContent(" ");
  });
});

describe("Button startIcon", () => {
  test("should display provided startIcon", () => {
    render(<Button {...buttonProps} startIcon={<CartIcon />} />);

    const startIcon = screen.getByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });
  test("should not display startIcon if not provided ", () => {
    render(<Button {...buttonProps} />);

    const startIcon = screen.queryByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});

describe("Button loading status", () => {
  test("should display spinner when isLoading", () => {
    render(<Button {...buttonProps} isLoading />);

    const loader = screen.getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });
});

describe("Button loading text", () => {
  test("should display loading text when is prodived and have isLoading status", () => {
    render(<Button {...buttonProps} isLoading loadingText="test" />);

    const loadingText = screen.getByTestId(BUTTON_TEST_IDS.LOADER_TEXT);

    expect(loadingText).toHaveTextContent("test");
  });
});
