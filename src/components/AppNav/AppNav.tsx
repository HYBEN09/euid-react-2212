import { AppLink } from "../AppLink/AppLink";

export function AppNav() {
  return (
    <nav className="AppNavigation">
      <ul className="flex gap-2">
        <li>
          <AppLink to="/"> Home </AppLink>
        </li>
        <li>
          <AppLink to="/users">User List</AppLink>
        </li>
      </ul>
    </nav>
  );
}
