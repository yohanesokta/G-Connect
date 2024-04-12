import '../style/sidebar.css'
import { ClassRender } from './ClassRender'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <div className='sidebar-header-title'>
          <h1>G - Connect</h1>
          <button><i className="fa-solid fa-circle-plus"></i></button>
        </div>
      </div>
      <div className="main-menu">
        <header>
          <h4><i className="fa-solid fa-angle-up"></i> Semua Kelas</h4>
        </header>
        <div className="class-container">
          <main>
            <ClassRender name='Kelas 12 Multimedia' desc='Kelas ini akan mempelajari Multimedia' time='2 - 10 - 2024' />
            <ClassRender />
          </main>
        </div>
      </div>
      <div className="profile">
        <header>
          <img src="/profile.png  " alt="" />
          <main>
            <div className='profile-name'>
              <h4>Yohanes Oktanio</h4>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </main>
        </header>
        <div className="button-container">
          <button>Logout</button>
          <button>Setting</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar