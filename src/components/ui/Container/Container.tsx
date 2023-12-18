interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
}

export const Container: React.FC<ContainerProps> = ({ children, maxWidth = 1398 }) => (
  <div className="mx-auto w-full px-[15px]" style={{ maxWidth }}>
    {children}
  </div>
);
