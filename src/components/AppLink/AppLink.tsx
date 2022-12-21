import { NavLink, LinkProps } from "react-router-dom";
import classNames from "classnames";

export function AppLink({ className, ...restProps }: LinkProps) {
  return (
    //? 기본적으로 active클래스 <NavLink>는 활성 상태일 때 구성 요소에 추가됩니다.
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
