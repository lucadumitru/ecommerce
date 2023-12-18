import type { Meta, StoryObj } from "@storybook/react";

import { UserIcon } from "@/components/ui";

import type { ButtonLinkProps } from "./ButtonLink";
import { ButtonLink } from "./ButtonLink";

const buttonLinkProps: ButtonLinkProps = {
  children: "Button",
  href: "some href",
  variant: "outline"
};

type Story = StoryObj<typeof ButtonLink>;
const ButtonTemplate: Story = { render: (args) => <ButtonLink {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonLinkProps;

export const Cointained = { ...ButtonTemplate };
Cointained.args = { ...buttonLinkProps, variant: "solid" };

export const Outlined = { ...ButtonTemplate };
Outlined.args = { ...buttonLinkProps, variant: "outline" };

export const StartIcon = { ...ButtonTemplate };
StartIcon.args = { ...buttonLinkProps, startIcon: <UserIcon />, variant: "solid" };

export default {
  component: ButtonLink,
  title: "ui/ButtonLink"
} as Meta<typeof ButtonLink>;
