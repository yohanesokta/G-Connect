import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatsPage from './app/chats/Page'
import Sign from './app/sign/Page'
import Login from './app/login/Page'
function RouterElement() {

  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<h1>Hello : ini adalah home page</h1>} />
          <Route path='/chats' element={<ChatsPage />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<h1>Mohom Maaf Path tidak ada</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterElement
