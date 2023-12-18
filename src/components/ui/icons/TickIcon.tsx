export const TickIcon: React.FC<ReactTagProps<"svg">> = ({ ...props }) => (
  <svg
    fill="none"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="5" cy="5" fill="currentColor" r="5" />
    <path d="M7 4L4.48404 7L3 5.27853" stroke="#fff" strokeLinecap="round" />
  </svg>
);
