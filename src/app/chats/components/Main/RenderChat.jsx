import React from 'react'

const RenderChat = ({ data, fromMe }) => {
  console.log(data)
  return (
    <div className={(fromMe) ? "chat-field chat-field-r" : "chat-field "}>
      <div className="chat">
        <div className="profile">
          <div className="gap-profile-image"></div>
          <img src={data.foto_profile ?? "/profile.png"} alt="error" />
        </div>
        <div className="text">
          <p>{data.text}</p>
          <div className="time"><span>Yohanes Oktanio - 12 - 10 2024</span></div>
        </div>
      </div>
    </div>
  )
}

export default RenderChat