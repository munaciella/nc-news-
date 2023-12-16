import React from "react";
import SignIn from "../SignIn/SignIn";
import UserList from "../src/Components/Users/UsersList";
import './LoginPage.css'

export default function LoginPage() {
  return (
     <section className="login">
        <div className="signin">
           <SignIn />
        </div>
        <div className="userlist">
           <UserList />
        </div>
     </section>
  );
}