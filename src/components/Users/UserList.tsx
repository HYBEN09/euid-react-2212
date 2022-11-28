import axios from "axios";
import { useEffect, useState } from "react";
import { IResponseUser, IUser } from "./types";
import { User } from "./Users";

export function UserList() {
  // 네트워크 요청/응답에 필요한 상태 선언
  // (idle → pending → fulfilled/rejected | loading, error, data)

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | Error>(null);
  const [data, setData] = useState<IUser[]>([]);

  //*===============================================================================================

  // 네트워크 요청/응답에 필요한 사이드 이펙트 처리
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10&nat=BR,RS")
      .then(({ data: { results } }: { data: { results: IResponseUser[] } }) => {
        setData(
          results.map(
            ({
              login: { uuid: id },
              name: { title, first, last },
              phone,
              picture: { large: photo },
              gender,
              email,
              location: { city, country },
            }: IResponseUser) => {
              return {
                id,
                name: `${title}. ${first} ${last}`,
                phone,
                photo,
                gender,
                email,
                city,
                country,
              };
            }
          )
        );
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  });

  if (loading) {
    return <div role="alert">LOADING ......</div>;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  //*===============================================================================================

  return (
    <ul className="UserList">
      {data.map((item) => (
        <User key={item.id} info={item} />
      ))}
    </ul>
  );
}
