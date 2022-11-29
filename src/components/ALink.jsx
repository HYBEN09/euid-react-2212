export const ALink = ({ href, isExternal, ...restProps }) => (
  <a
    href={href}
    rel={isExternal && "noopener noreferrer"}
    target={isExternal && "_blank"}
    {...restProps}
  />
);
