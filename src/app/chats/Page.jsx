import { useEffect, useState, useRef } from "react"
import { HeaderUpdater } from "../../HeaderUpdater"
import Sidebar from "./components/Sidebar/Sidebar.jsx"
import "./style/page.css"
import axios from "axios"
const ChatsPage = () => {

  const [user, setUser] = useState(null)
  const [Kelas, SetKelas] = useState()
  const executeRef = useRef(false)
  useEffect(() => {
    if (!executeRef.current) {
      executeRef.current = true
      checkIsLogin()
    }
  }, [])
  const checkIsLogin = async () => {
    try {
      const URL = import.meta.env.VITE_ORIGIN_SERVER
      const { data } = await axios.post(`${URL}/token`, {}, {
        headers: {
          "authorization": `Barrier ${sessionStorage.getItem('_token')}`
        }
      })
      const result = await axios.post(`${URL}/get`, {}, {
        headers: {
          "authorization": `Barrier ${data._t}`,
          "session": sessionStorage.getItem('_token')
        }
      })

      const kelas = await axios.post(`${URL}/main/class`, {}, {
        headers: {
          "authorization": `Barrier ${data._t}`,
          "session": sessionStorage.getItem('_token')
        }
      })
      SetKelas(kelas.data.data)
      setUser(result.data.data)
    } catch (error) {
      if (error.response || error.code == "ERR_NETWORK") {
        window.location.href = "/login?code=500"
      }
    }
  }

  return (<>
    <HeaderUpdater title="Chat Menu" />
    <div className="content">
      <aside>
        <Sidebar data={user} kelas={Kelas} />
      </aside>

      <div className="main">


      </div>
    </div>
  </>
  )
}

export default ChatsPage