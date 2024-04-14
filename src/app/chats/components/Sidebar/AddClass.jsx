import axios from "axios"
import { token_refresher } from "./token-refresher"
import { useRef } from "react";
import { TrimsChecker } from "./TrimCheck";

const AddClassComponents = ({ control }) => {
  const create_name = useRef()
  const create_desc = useRef()
  const button_tambah_kelas = useRef()
  const create_info = useRef()
  const join_code = useRef()

  const session = sessionStorage.getItem('_token');
  const URL = import.meta.env.VITE_ORIGIN_SERVER

  const add_class = async () => {
    if (TrimsChecker(create_name.current.value)) {
      create_info.current.innerHTML = "tidak boleh kosong beb 😠"
      return;
    }
    if (TrimsChecker(create_desc.current.value)) {
      create_info.current.innerHTML = "deskripsine lo, hmmm 😠"
      return;
    }
    button_tambah_kelas.current.disable = true;
    button_tambah_kelas.current.innerHTML = "Please Wait"
    try {
      const token = await token_refresher();

      const { data } = await axios.post(`${URL}/class/create`, {
        name: create_name.current.value,
        desc: create_desc.current.value
      }, {
        headers: {
          "authorization": `Barrier ${token}`,
          "session": session
        }
      })
      if (data.success == 1) {
        window.location.reload()
      }
      button_tambah_kelas.current.disable = false;
      button_tambah_kelas.current.innerHTML = "Tambah"
    } catch (_) {
      button_tambah_kelas.current.disable = false;
      button_tambah_kelas.current.innerHTML = "Tambah"
    }
  }

  return (<div className="container-add-class">
    <div className="closer" onClick={control}></div>
    <div className="add-class">
      <div className="tambah">
        <h4>Tambah Kelas</h4>
        <input type="text" name='add-kelas-name' ref={create_name} placeholder='Nama Kelas' />
        <input type="text" name='add-kelas-desc' ref={create_desc} placeholder='Deskripsi Kelas' />
        <p ref={create_info}></p>
        <div className="button">
          <button onClick={control}>Batal</button>
          <button onClick={add_class} ref={button_tambah_kelas}>Tambah</button>
        </div>
      </div>
      <div className="join">
        <div className="join-container">
          <h4>Join Kelas</h4>
          <input type="text" name='join-kelas-code' placeholder='kode kelas' />
          {/* <p>gagal menambahkan</p> */}
          <div className="button">
            <button>Join Kelas</button>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default AddClassComponents