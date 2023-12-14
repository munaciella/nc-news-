import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsernameContext } from "../UsernameContext/UsernameContext";
import { getUser } from "../src/API/api";

const SignIn = () => {
    const { username, setUsername } = useContext(UsernameContext)
    const [usernameInput, setUsernameInput] = useState("")
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const nav = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      getUser(usernameInput)
        .then((response) => {
          setUsername(response.data.users.username)
          setIsError(null)
        })
        .then(() => {
          nav(`/`);
        })
        .catch((err) => {
            console.log(err);
            setIsError(true);
          })
          .finally(() => {
            setIsLoading(false);
          });
          
    
      if (isLoading) return <h2>Loading...</h2>;
      if (isError) return <h2>Something went wrong</h2>;
    };
  
    const handleChange = (event) => {
      setUsernameInput(event.target.value)
    }

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <h2>Already have an account ?</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username"
        required
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        value={username}
      />
      <button>Sign In</button>

    </form>
  );
}

export default SignIn