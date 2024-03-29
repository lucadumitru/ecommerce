export type TypographyVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "title-4"
  | "title-5"
  | "sub-title"
  | "body-1"
  | "body-2"
  | "body-3"
  | "link-1"
  | "link-2"
  | "link-3";
export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "span" | "div" | "p";
export type TypographyProps<Tag extends TypographyTag> = ReactTagProps<Exclude<Tag, "span">> & {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * tag
   */
  tag?: TypographyTag;
  /**
   * variant
   */
  variant: TypographyVariant;
};

export const TYPOGRAPHY_TEST_IDS = {
  CONTAINER: "typography-container"
};

/**
 * Typography component
 */
export const Typography = <T extends TypographyTag>({
  children,
  variant,
  tag: Tag = "div",
  className = "",
  ...props
}: TypographyProps<T>) => (
  <Tag className={`${variant} ${className}`} data-testid={TYPOGRAPHY_TEST_IDS.CONTAINER} {...props}>
    {children}
  </Tag>
);

export default Typography;
