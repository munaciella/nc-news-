import React from "react";
import SignIn from "../SignIn/SignIn";
import UserList from "../Users/UsersList";

export default function LoginPage() {
  return (
    <section className="login">
      <SignIn />
      <UserList />
    </section>
  );
}