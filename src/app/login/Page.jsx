import "./style/page.css"
const Login = () => {
  return (
    <div className="sign-container">
      <aside>
        <div className="logo">
        </div>
      </aside>
      <main>
        <div className="content">
          <h1>G - CONNECT</h1>
          <form >
            <h3>Log In</h3>
            <nav>
              <i class="fa-solid fa-arrow-right"></i>
              <div className="login">
                <p>belum punya akun?</p>
                <a href="/sign">Sign In</a>
              </div>
            </nav>
            <input type="email" name="email" placeholder="Email" id="email" required />
            <input type="text" name="password" placeholder="Password" id="password" required />
            <button type="submit">Log In</button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Login

