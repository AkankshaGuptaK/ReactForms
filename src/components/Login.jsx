import Input from "./input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  const {
    value: password,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          error={emailHasError && "Please enter a valid email!"}
          value={email}
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          error={passwordHasError && "Please enter a valid password!"}
          value={password}
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onBlur={(event) => handleInputBlur("email", event.target.value)}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          {emailIsInvalid && <p>Please enter a valid email address</p>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredValues.password}
            onBlur={(event) => handleInputBlur("password", event.target.value)}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
