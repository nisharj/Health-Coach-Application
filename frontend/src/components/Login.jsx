import "./styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" method="POST" action="/Login">
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="username" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input type="password" name="password" placeholder="Enter your password" required />
        </div>

        <button type="submit" className="login-btn">Submit</button>
      </form>
    </div>
  );
}

export default Login;
