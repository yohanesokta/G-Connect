import React, { useRef } from 'react'

const RenderChat = ({ data }) => {
  const fromME = useRef(false)
  if (data.from == sessionStorage.getItem('user')) { fromME.current = true }
  return (
    <div className={(fromME.current) ? "chat-field chat-field-r" : "chat-field "}>
      <div className="chat">
        <div className="profile">
          <div className="gap-profile-image"></div>
          <img src={data.foto_profile ?? "/profile.png"} alt="error" />
        </div>
        <div className="text">
          <p>{data.text}</p>
          <div className="blank"></div>
        </div>
      </div>
    </div>
  )
}

export default RenderChat