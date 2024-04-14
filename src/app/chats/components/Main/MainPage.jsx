import { useState } from "react"
import "../../style/main-page.css"
const MainPage = ({ data }) => {
  const [aside, setAside] = useState(false)
  const hideaside = () => {
    if (aside) {
      setAside(false)
    } else { setAside(true) }
  }
  return (
    <div className="container-main-page">
      <main>
        <nav>
          <h4>{data.name}</h4>
          <div className="button">
            <button>{data.code}</button>
            <button onClick={hideaside}><i className="fa-solid fa-bars-progress"></i></button>
          </div>
        </nav>
        <div className="container-chat"></div>
        <div className="container-keyboard">
          <form action="" className="keyboard">
            <i className="fa-solid fa-circle-plus"></i>
            <input type="text" />
          </form>
        </div>
      </main>
      <aside className={(aside) ? null : "hide-side"}></aside>
    </div>
  )
}

export default MainPage