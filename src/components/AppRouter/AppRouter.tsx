import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>UserList</div>} />
      <Route path="/user" element={<div>User</div>} />
    </Routes>
  );
}
