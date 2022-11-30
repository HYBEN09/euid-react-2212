const { React } = window;

//...restProps에는 무슨 data가 들어올지 몰라 any로 서정 가능 => [ key:string ]:any;
interface Props {
  href: string;
  isExternal: boolean;
  [key: string]: any;
}

export const ALink = ({ href, isExternal, ...restProps }: Props) => (
  <a
    href={href}
    rel={isExternal ? "noopener noreferrer" : undefined}
    target={isExternal ? "_blank" : undefined}
    {...restProps}
  />
);
