import { useEffect, useState } from "react";
import axios from "axios";

export function UserList() {
  // 네트워크 요청/응답에 필요한 상태 선언
  // (idle → pending → fulfilled/rejected | loading, error, data)

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10&nat=BR,RS")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <ul className="UserList">
      <li>
        <figure className="User" lang="en">
          <img src="pictures" alt="" />
          <figcaption>
            <table>
              <caption>user information description</caption>
              <tbody>
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">phone</th>
                    <th scope="col">gender</th>
                    <th scope="col">city</th>
                    <th scope="col">country</th>
                  </tr>
                </thead>
              </tbody>
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
            </table>
          </figcaption>
        </figure>
      </li>
    </ul>
  );
}
