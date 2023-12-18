export const BurgerMenuIcon: React.FC<ReactTagProps<"svg">> = ({ ...props }) => (
  <svg
    fill="none"
    height="20"
    stroke="currentColor"
    viewBox="0 0 26 20"
    width="26"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 4H21" strokeLinecap="round" strokeWidth="2.4" />
    <path d="M4 10H21" strokeLinecap="round" strokeWidth="2.4" />
    <path d="M4 16H21" strokeLinecap="round" strokeWidth="2.4" />
  </svg>
);
