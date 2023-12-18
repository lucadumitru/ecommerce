type IconsVariants = "big" | "small";

interface LogoIconProps extends ReactTagProps<"svg"> {
  bg?: boolean;
  bgColor?: string;
  IconVariants?: IconsVariants;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  bg = false,
  bgColor = "#0156FF",
  IconVariants = "big",
  ...props
}) => (
  <svg
    fill="currentColor"
    height="50"
    viewBox="0 0 64 50"
    width="64"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {bg && (
      <path
        d="M63.9187 34.1965L32 49.6552L0.0813034 34.1965C0.0813034 34.1965 -3.20444 0 32 0C67.2044 0 63.9187 34.1965 63.9187 34.1965Z"
        fill={bgColor}
      />
    )}
    {IconVariants === "big" && (
      <path
        d="M21.7362 2L5 11.9183V24.1254L21.7362 34.0437L35.1619 26.4143V30.0383L21.7362 38.0492L5 27.9402V32.3271L21.7362 42.0546L38.4724 32.3271V20.12L25.0466 27.9402V24.1254L38.4724 16.1145V11.9183L21.7362 2Z"
        transform="translate(10, 0)"
      />
    )}
    {IconVariants === "small" && (
      <path d="M31.7474 11.2864L22.6902 17.1799V24.4334L31.7474 30.3268L39.0131 25.7934V27.9468L31.7474 32.7069L22.6902 26.7001V29.3068L31.7474 35.087L40.8047 29.3068V22.0533L33.539 26.7001V24.4334L40.8047 19.6732V17.1799L31.7474 11.2864Z" />
    )}
  </svg>
);
