import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../src/API/api";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(2);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null)

  useEffect(() => {
    getUsers()
        .then(({users}) => {
          setUsers(users)
          setIsError(null)
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
      if (isError) return <h2>Something went wrong</h2>;

  return (
    <div>
      <h2>Users:</h2>
      <div className="grid-container">
        {users
          .map((user, index) => {
            return <UserCard key={index} user={user} />;
          })
          .slice(count - 2, count)}
      </div>
      <button
        className="button-blue"
        onClick={() => {
          if (count >= users.length) {
            setCount(2);
          } else {
            setCount(count + 2);
          }
        }}
      >
        Show others
      </button>
    </div>
  );
    }