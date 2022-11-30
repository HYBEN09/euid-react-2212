const { React } = window;
export const ALink = ({ href, isExternal, ...restProps }) => (React.createElement("a", { href: href, rel: isExternal ? "noopener noreferrer" : undefined, target: isExternal ? "_blank" : undefined, ...restProps }));
//# sourceMappingURL=ALink.js.map