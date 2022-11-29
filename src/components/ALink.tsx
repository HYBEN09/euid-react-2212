
const {React} = window


interface Props{
  href:string;
  isExternal:boolean;
  [key : string]:any;
}


export const ALink = ({ href, isExternal, ...restProps }:Props) => (  
  <a
    href={href}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    target={isExternal ? '_blank' : undefined}
    {...restProps}
  />
);
