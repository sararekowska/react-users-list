import { useEffect, useState } from "react";
import "./App.css";

function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <ol>
      {users.map((user) => (
        <li>
          {user.name}
          <span> @{user.username}</span>
        </li>
      ))}
    </ol>
  );
}

export default Users;
