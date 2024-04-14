import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatsPage from './app/chats/Page'
import Sign from './app/sign/Page'
import Login from './app/login/Page'
function RouterElement() {
  const NotFound = () => {
    return (<>
      <h4>404 NOT FOUND</h4>
    </>)
  }
  return (
    <>
      <Router >
        <Routes>
          <Route path='/' element={<h1>Hello : ini adalah home page</h1>} />
          <Route path='/500' element={<h4>500 : Server Error</h4>} />
          <Route path='/chats' element={<ChatsPage />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default RouterElement
