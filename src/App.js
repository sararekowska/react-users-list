import { useQuery } from "react-query";

import "./App.css";

function Users() {
  const query = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  console.log(query);

  return query.isSuccess ? (
    <ol>
      {query.data.map((user) => (
        <li key={user.id}>
          {user.name}
          <span> @{user.username}</span>
        </li>
      ))}
    </ol>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Users;
