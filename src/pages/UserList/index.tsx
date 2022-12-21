import { useUsers } from "@/services/useUsers";
import { Link } from "react-router-dom";

export default function UserList() {
  const { loading, error, users } = useUsers();

  if (loading) {
    return <div role="alert"> 사용자 정보 데이터 로딩 중... </div>;
  }

  if (error) {
    return <div role="alert"> {error.message} 오류 발생 </div>;
  }

  return (
    <div id="UserList" className="p-4">
      <h1 className="text-indigo-600 text-4xl">User List</h1>
      <ul className="Users mt-8 inline-flex flex-col gap-2">
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={{ pathname: `/users/${user.id}` }}>
              <figure className="UserCard">
                <figcaption className="flex gap-2">
                  <em className="userName not-italic font-semibold">
                    {user.name}
                  </em>
                  <span className="userEmail">{user.email}</span>
                </figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
