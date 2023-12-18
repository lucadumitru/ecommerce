import * as ICONS from "./index";

type IconOptions = Record<keyof typeof ICONS, unknown>;
export const ICON_OPTIONS = Object.entries(ICONS).reduce<IconOptions>(
  (acc, [iconName, IconComponent]) => {
    acc[iconName.replace(/icon$/i, "") as keyof typeof ICONS] = IconComponent({
      circle: "outline",
      path: "outline"
    });
    return acc;
  },
  {} as IconOptions
);
