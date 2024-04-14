import axios from "axios"

export const LogoutControl = async () => {
  const URL = import.meta.env.VITE_ORIGIN_SERVER + "/logout"
  const data = await axios.post(URL, {}, {
    headers: {
      "authorization": `Barrier ${sessionStorage.getItem('_token')}`
    }
  })
  if (data.status == 200) {
    sessionStorage.setItem("_token", "")
    window.location.href = "/login"
  }
}
