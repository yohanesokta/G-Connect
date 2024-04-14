import "./style/page.css"
import axios from "axios"
import { useRef, useState } from "react"
const Login = () => {
  const email = useRef()
  const password = useRef()
  const [Msg, SetMsg] = useState("")
  const [Eye, SetEye] = useState(<i className="fa-solid fa-eye"></i>)
  const [type, SetTye] = useState("password")
  const eyeset = () => {
    if (type !== "password") {
      SetTye("password");
      SetEye(<i className="fa-solid fa-eye"></i>)
    } else {
      SetTye("text");
      SetEye(<i className="fa-solid fa-eye-slash"></i>)
    }
  }

  const Login = async (e) => {
    e.preventDefault()
    const URL = import.meta.env.VITE_ORIGIN_SERVER + "/login"
    try {
      const { data } = await axios.post(URL, {
        email: email.current.value,
        password: password.current.value,
      })
      const token = data["2bt2n"]
      sessionStorage.setItem('_token', token)
      window.location.href = "/chats"
    } catch (_) {
      if (_.response) {
        SetMsg(_.response.data.message)
      }
    }
  }


  return (
    <div className="sign-container">
      <aside>
        <div className="logo">
        </div>
      </aside>
      <main>
        <div className="content">
          <h1>G - CONNECT</h1>
          <form onSubmit={Login}>
            <h3>Log In</h3>
            <nav>
              <a href="/">
                <i className="fa-solid fa-house"></i>

              </a>
              <div className="login">
                <p>belum punya akun?</p>
                <a href="/sign">Sign In</a>
              </div>
            </nav>
            <p>{Msg}</p>
            <input type="email" ref={email} name="email" placeholder="Email" id="email" required />
            <div className="psw">
              <input type={type} ref={password} name="password" placeholder="Password" id="password" required />
              <div className="eye" onClick={eyeset}>
                {Eye}
              </div>
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Login

