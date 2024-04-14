import "./style/page.css"
import axios from "axios"
import { useRef, useState } from "react"
const Sign = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()
  const password2 = useRef()
  const [Msg, SetMsg] = useState("")

  const [Eye, SetEye] = useState(<i className="fa-solid fa-eye"></i>)
  const [Eye2, SetEye2] = useState(<i className="fa-solid fa-eye"></i>)
  const [type, SetTye] = useState("password")
  const [type2, SetTye2] = useState("password")
  const eyeset = () => {
    if (type !== "password") {
      SetTye("password");
      SetEye(<i className="fa-solid fa-eye"></i>)
    } else {
      SetTye("text");
      SetEye(<i className="fa-solid fa-eye-slash"></i>)
    }
  }
  const eyeset2 = () => {
    if (type2 !== "password") {
      SetTye2("password");
      SetEye2(<i className="fa-solid fa-eye"></i>)
    } else {
      SetTye2("text");
      SetEye2(<i className="fa-solid fa-eye-slash"></i>)
    }
  }

  const Register = async (e) => {
    e.preventDefault()
    const URL = import.meta.env.VITE_ORIGIN_SERVER + "/sign"
    try {
      await axios.post(URL, {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        password2: password2.current.value
      })
      window.location.href = "/login"
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
          <form action="./" onSubmit={Register} >
            <h3>Sign In</h3>
            <nav>
              <i className="fa-solid fa-house"></i>
              <div className="login">
                <p>sudah punya akun?</p>
                <a href="/login     ">Login</a>
              </div>
            </nav>
            <p>{Msg}</p>
            <input type="text" name="username" placeholder="Username" id="username" ref={username} required />
            <input type="email" name="email" placeholder="Email" id="email" required ref={email} />
            <div className="psw">
              <input type={type} ref={password} name="password" placeholder="Password" id="password" required />
              <div className="eye" onClick={eyeset}>
                {Eye}
              </div>
            </div>
            <div className="psw">
              <input type={type2} ref={password2} name="password2" placeholder="Confirm Password" id="password2" required />
              <div className="eye" onClick={eyeset2}>
                {Eye2}
              </div>
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
      </main>
    </div>
  )
}
export default Sign

