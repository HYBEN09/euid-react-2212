/* eslint-disable react/no-children-prop */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDetail from "@/pages/UserDetail";
import UserList from "@/pages/UserList";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Container } from "./components/Container/Container";

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <AppHeader />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <div
                children={
                  <h1 className="text-4xl mt-4">안녕!! 리엑트 라우터</h1>
                }
              />
            }
          />

          <Route path="/users">
            {/* index === path=" " */}
            <Route index element={<UserList />} />
            {/* 동적 라우팅  ( users/user-cikss ) */}
            <Route path=":userId" element={<UserDetail />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}
