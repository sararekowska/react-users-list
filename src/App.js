import { useState } from "react";
import { useQuery } from "react-query";

import "./App.css";

function Users() {
  const query = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  const [search, setSearch] = useState("");

  return query.isSuccess ? (
    <>
      <input
        type="text"
        placeholder="Search by user name..."
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <ol>
        {query.data
          .filter(
            (user) =>
              search === "" ||
              user.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <li key={user.id}>
              {user.name}
              <span> @{user.username}</span>
            </li>
          ))}
      </ol>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Users;
