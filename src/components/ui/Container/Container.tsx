type ContainerTag = "section" | "article" | "div";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number;
  tag?: ContainerTag;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 1398,
  tag: Tag = "div",
  className
}) => (
  <Tag
    className={`${className?.length ? className : ""} mx-auto w-full px-[15px]`}
    style={{ maxWidth }}
  >
    {children}
  </Tag>
);
