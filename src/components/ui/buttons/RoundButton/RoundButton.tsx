interface RoundButtonProps extends ReactTagProps<"button"> {
  icon: React.ReactNode;
}

export const RoundButton: React.FC<RoundButtonProps> = ({ icon, ...props }) => (
  <button
    aria-label="round button"
    className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-slate-100  text-dark-gray transition  hover:bg-slate-200 hover:text-blue"
    {...props}
  >
    <span>{icon}</span>
  </button>
);
