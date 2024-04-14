import axios from "axios";

export const token_refresher = async () => {
  const URL = import.meta.env.VITE_ORIGIN_SERVER
  const { data } = await axios.post(`${URL}/token`, {}, {
    headers: {
      "authorization": `Barrier ${sessionStorage.getItem('_token')}`
    }
  })
  return data._t
}