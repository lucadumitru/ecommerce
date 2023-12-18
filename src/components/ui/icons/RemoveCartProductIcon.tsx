export const RemoveCartProductIcon: React.FC<ReactTagProps<"svg">> = ({ ...props }) => (
  <svg
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="10" cy="10" fill="none" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 7L13.5 13.5" stroke="currentColor" strokeLinecap="round" />
    <path d="M13.5 7L7 13.5" stroke="currentColor" strokeLinecap="round" />
  </svg>
);
