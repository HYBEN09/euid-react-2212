import { AppNav } from "../AppNav/AppNav";
import { Container } from "../Container/Container";

export function AppHeader(): JSX.Element {
  return (
    <header className="p-6 bg-slate-50  border-b-slate-300">
      <Container>
        <AppNav />
      </Container>
    </header>
  );
}
