import './SignUp.css';

function SignUp() {
  return (
    <form id="login-form">
      <label htmlFor="username-field" className="login-form-label">
        Username:
      </label>
      <input
        type="text"
        name="username"
        id="username-field"
        className="login-form-field"
        placeholder="Enter your username"
      />

      <label htmlFor="password-field" className="login-form-label">
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password-field"
        className="login-form-field"
        placeholder="Enter your password"
      />

      <button type="submit" id="login-form-submit">
        Sign In
      </button>
    </form>
  );
}
export default SignUp;