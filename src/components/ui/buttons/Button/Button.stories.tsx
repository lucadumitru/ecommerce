import type { Meta, StoryObj } from "@storybook/react";

import { InstagramIcon } from "../..";
import { ICON_OPTIONS } from "../../icons/storybook";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const buttonProps: ButtonProps = {
  children: "Button",
  disabled: false,
  iconMobileOff: false,
  isLoading: false,
  loadingText: "Loading",
  variant: "solid"
};

type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;

export const Cointained = { ...ButtonTemplate };
Cointained.args = { ...buttonProps, variant: "solid" };

export const Outlined = { ...ButtonTemplate };
Outlined.args = { ...buttonProps, variant: "outline" };

export const StartIcon = { ...ButtonTemplate };
StartIcon.args = { ...buttonProps, startIcon: <InstagramIcon />, variant: "solid" };

export default {
  argTypes: {
    endIcon: {
      control: {
        type: "select"
      },
      options: ICON_OPTIONS
    },
    startIcon: {
      control: {
        type: "select"
      },
      options: ICON_OPTIONS
    }
  },
  component: Button,
  title: "ui/Button"
} as Meta<typeof Button>;
