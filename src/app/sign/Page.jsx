import "./style/page.css"
const Sign = () => {
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
            <h3>Sign In</h3>
            <nav>
              <i class="fa-solid fa-arrow-right"></i>
              <div className="login">
                <p>sudah punya akun?</p>
                <a href="/login     ">Login</a>
              </div>
            </nav>
            <input type="text" name="username" placeholder="Username" id="username" required />
            <input type="email" name="email" placeholder="Email" id="email" required />
            <input type="text" name="password" placeholder="Password" id="password" required />
            <input type="text" name="password2" placeholder="Re enter Passowrd" id="password2" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Sign

