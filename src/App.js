import { useState } from "react";
import { useQuery } from "react-query";
import "./App.scss";

function Users() {
  const query = useQuery("users", () =>
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );

  const [search, setSearch] = useState("");

  return query.isSuccess ? (
    <section>
      <h1>Users List</h1>
      <input
        type="text"
        placeholder="Search by user name..."
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <ul>
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
      </ul>
    </section>
  ) : (
    <h1>Loading...</h1>
  );
}

export default Users;
