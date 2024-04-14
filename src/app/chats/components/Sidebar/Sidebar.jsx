import '../../style/sidebar.css'
import '../../style/add_class.css'
import { ClassRender } from './ClassRender'
import { LogoutControl } from './LogoutControl'
import { useRef, useState } from 'react'
import AddClassComponents from './AddClass'
const Sidebar = ({ data, kelas }) => {
  const [ViewAdd, SetViewAdd] = useState()
  const add = useRef(false)
  const listKelas = useRef()
  const Profile = ({ name, role, image }) => {
    return (<>
      <header>
        <img src={image ?? "/profile.png"} alt="" />
        <main>
          <div className='profile-name'>
            <h4>{name}</h4>
            <p>~ {role}</p>
          </div>
        </main>
      </header>
      <div className="button-container">
        <button onClick={LogoutControl}>Logout</button>
        <button>Setting</button>
      </div>
    </>)
  }
  const controlViewAdd = () => {
    if (!add.current) {
      SetViewAdd(<AddClassComponents control={controlViewAdd} />)
      add.current = true
    } else {
      SetViewAdd(<></>)
      add.current = false
    }
  }

  listKelas.current = kelas?.map((e, i) => {
    return <ClassRender key={i} name={e.name} desc={e.desc} time='2 - 10 - 2024' />
  })
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-title'>
          <h1>G - Connect</h1>
          <button onClick={controlViewAdd}><i className="fa-solid fa-circle-plus"></i></button>
        </div>
      </div>
      {ViewAdd}
      <div className="main-menu">
        <header>
          <h4><i className="fa-solid fa-angle-up"></i> Semua Kelas</h4>
        </header>
        <div className="class-container">
          <main>
            {listKelas.current}
          </main>
        </div>
      </div>
      <div className="profile">
        {(!data) ? <div className="loader"></div> : <Profile name={data.username} role="" />}
      </div>
    </div>
  )
}

export default Sidebar