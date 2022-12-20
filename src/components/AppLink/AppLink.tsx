import { NavLink, LinkProps } from "react-router-dom";
import classNames from "classnames";

export function AppLink({ className, ...restProps }: LinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          "text-pink-500 hover:text-pink-900",
          isActive
            ? "text-sky-600 hover:text-sky-700 hover:cursor-not-allowed font-semibold"
            : "",
          className
        )
      }
      {...restProps}
    />
  );
}
