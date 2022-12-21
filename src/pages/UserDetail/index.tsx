import { useUserById } from "@/services/useUser";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  //? useParams 훅은 <Route path>. 하위 경로는 상위 경로에서 모든 매개변수를 상속합니다.
  const { userId } = useParams();

  const { loading, error, user } = useUserById(userId as string);

  if (loading) {
    return <div role="alert"> 사용자 정보 데이터 로딩 중... </div>;
  }

  if (error) {
    return <div role="alert"> {error.message} 오류 발생 </div>;
  }

  // interpolation (보간)
  if (user) {
    const { name, email } = user;

    return (
      <div id="UserList" className="p-4">
        <h1 className="text-indigo-600 text-4xl">{name}</h1>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    );
  } else {
    return null;
  }
}
