import { render, screen } from "@testing-library/react";

import { BUTTON_LINK_TEST_IDS, ButtonLink, CartIcon } from "@/components/ui";
import type { ButtonLinkProps } from "@/components/ui";

const buttonLinkProps = {
  href: "some url"
} satisfies ButtonLinkProps;

describe("Button variant", () => {
  test("should correct show solid variant when provided", () => {
    const solidClasses = "bg-dark-blue hover:bg-blue text-white disabled:bg-light-gray py-2";
    render(<ButtonLink {...buttonLinkProps} variant="solid" />);

    const container = screen.getByTestId(BUTTON_LINK_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(solidClasses);
  });
  test("should correct show outline variant when provided", () => {
    const outlineClasses =
      "border-dark-blue text-dark-blue hover:border-blue hover:text-blue border-2 disabled:border-light-gray disabled:text-light-gray py-[0.385rem]";
    render(<ButtonLink {...buttonLinkProps} variant="outline" />);

    const container = screen.getByTestId(BUTTON_LINK_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(outlineClasses);
  });
});

describe("Button children", () => {
  test("should display provided children", () => {
    render(<ButtonLink {...buttonLinkProps}>test</ButtonLink>);

    const children = screen.getByTestId(BUTTON_LINK_TEST_IDS.CHILDREN);

    expect(children).toHaveTextContent("test");
  });
  test("should not display children if not provided ", () => {
    render(<ButtonLink {...buttonLinkProps} />);

    const children = screen.queryByTestId(BUTTON_LINK_TEST_IDS.CHILDREN);

    expect(children).not.toHaveTextContent(" ");
  });
});

describe("Button startIcon", () => {
  test("should display provided startIcon", () => {
    render(<ButtonLink {...buttonLinkProps} startIcon={<CartIcon />} />);

    const startIcon = screen.getByTestId(BUTTON_LINK_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });
  test("should not display startIcon if not provided ", () => {
    render(<ButtonLink {...buttonLinkProps} />);

    const startIcon = screen.queryByTestId(BUTTON_LINK_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});

describe("Button endIcon", () => {
  test("should display provided endIcon", () => {
    render(<ButtonLink {...buttonLinkProps} endIcon={<CartIcon />} />);

    const endIcon = screen.getByTestId(BUTTON_LINK_TEST_IDS.END_ICON);

    expect(endIcon).toBeInTheDocument();
  });
  test("should not display endIcon if not provided ", () => {
    render(<ButtonLink {...buttonLinkProps} />);

    const endIcon = screen.queryByTestId(BUTTON_LINK_TEST_IDS.END_ICON);

    expect(endIcon).not.toBeInTheDocument();
  });
});
