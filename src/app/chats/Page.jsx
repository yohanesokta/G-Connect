import { HeaderUpdater } from "../../HeaderUpdater"
import Sidebar from "./components/Sidebar"
import "./style/page.css"
const ChatsPage = () => {
  return (<>
    <HeaderUpdater title="Chat Menu" />
    <div className="content">
      <aside>
        <Sidebar />
      </aside>

      <div className="main">


      </div>
    </div>
  </>
  )
}

export default ChatsPage