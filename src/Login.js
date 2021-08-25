import React from 'react'

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  emailError,
  setEmailError,
  setPasswordError,
  handleLogin,
  handleSignup,
  handleLogout,
  hasAccount,
  setHasAccount,
  passwordError
}) => {
  return (
    <section className="login">
      <section className="loginContainer">
        <label>User Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="text"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Dont have a account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Already have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </section>
    </section>
  );
};

export default Login
