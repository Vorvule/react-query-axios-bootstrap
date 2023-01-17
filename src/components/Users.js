import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

async function fetchData() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return data;
}

function Users() {
  const { isLoading, isError, error, data } = useQuery(["users"], fetchData);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul className="list-group">
      {data.map((res, i) => {
        return (
          <li className="list-group-item mb-3" key={i}>
            <h3>{res.username}</h3>
            <p>{res.email}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Users;