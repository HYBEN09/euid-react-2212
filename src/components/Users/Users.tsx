import { IUser } from "./types";

interface UserProps {
  info: IUser;
}

export function User({ info }: UserProps): JSX.Element {
  return (
    <li id={info.id}>
      <figure className="User" lang="en">
        <img src={info.photo} alt="" width={128} height={128} />
        <figcaption>
          <table className="border-separate border-spacing-2 border border-slate-400">
            <caption>{info.name} information description</caption>
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
              <td>{info.id}</td>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>{info.gender}</td>
              <td>{info.city}</td>
              <td>{info.country}</td>
            </tr>
          </table>
        </figcaption>
      </figure>
    </li>
  );
}
