import { useEffect, useRef, useState } from "react"
import profile_default from "/profile.png"
import "../../style/main-page.css"
import RenderChat from "./RenderChat"
import axios from "axios"
import { TrimsChecker } from "../Sidebar/TrimCheck"
import { token_refresher } from "../Sidebar/token-refresher"
const MainPage = ({ data }) => {
  const URL = import.meta.env.VITE_ORIGIN_SERVER
  const [message, setMessage] = useState([])
  const [aside, setAside] = useState(false)
  const [Copy, setCopy] = useState(false)
  const text = useRef()
  const code_ref = useRef()
  const copy_hande = () => {
    if (!Copy) {
      const text = code_ref.current.innerHTML
      setCopy(true)
      navigator.clipboard.writeText(text)
      setTimeout(() => {
        setCopy(false)
      }, 2000)
    }
  }
  const hideaside = () => {
    if (aside) {
      setAside(false)
    } else { setAside(true) }
  }

  const handle_form = async (e) => {
    e.preventDefault()
    if (!TrimsChecker(text.current.value)) {
      const message = text.current.value
      text.current.value = ""
      const token = await token_refresher();
      await axios.put(`${URL}/ch_up`, {
        text: message
      }, {
        headers: {
          "authorization": `Barrier ${token}`,
          "session": sessionStorage.getItem('_token'),
          "reqid": data.sub_id
        }
      })
    }
  }

  useEffect(() => {
    read_chat()
  }, [])

  const read_chat = async (before_token) => {
    const token = (!before_token) ? await token_refresher() : before_token
    const result = await axios.post(`${URL}/ch_r`, {}, {
      headers: {
        "authorization": `Barrier ${token}`,
        "session": sessionStorage.getItem('_token'),
        "reqid": data.sub_id
      }
    })

    const message_load = result?.data?.map((e, i) => {
      return (<RenderChat data={e} key={i} />)
    })
    setMessage(message_load)
  }
  return (
    <div className="container-main-page">
      <main>
        <nav>
          <div className="name">
            <h4>{data.name}</h4>
            <p>{data.member.length} Pengguna</p>
          </div>
          <div className="button">
            <button ref={code_ref} onClick={copy_hande}>{(Copy) ? "Copied" : data.code}</button>
            <button onClick={hideaside}><i className="fa-solid fa-bars-progress"></i></button>
          </div>
        </nav>
        <div className="container-chat">
          {message}
        </div>
        <div className="container-keyboard">
          <form action="" className="keyboard" onSubmit={handle_form}>
            <i className="fa-solid fa-circle-plus"></i>
            <input type="text" ref={text} />
          </form>
        </div>
      </main>
      <aside className={(aside) ? null : "hide-side"}></aside>
    </div>
  )
}

export default MainPage