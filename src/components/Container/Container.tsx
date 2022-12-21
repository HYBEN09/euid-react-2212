import classNames from "classnames";

type ComponentProps = {
  className: string;
  children: React.ReactNode;
};

type ContainerProps = {
  as: string | React.FC<ComponentProps>;
} & Partial<ComponentProps>;

export function Container({
  as: ComponentName,
  className,
  children,
}: ContainerProps): JSX.Element {
  return (
    <ComponentName
      className={classNames("mx-auto w-5/6 max-w-screen-xl", className)}
    >
      {children}
    </ComponentName>
  );
}

Container.defaultProps = {
  as: "div",
};
