import React from 'react'
import "../../scss/menus/base-chat.scss"
import Message from './Message'

const BaseChat = () => {
    return (
        <div className='min-base-chat'>
            <div className="navigation">

            </div>
            <div className="chat-pull">
                <Message />
                <Message formMe={true} />
                <Message formMe={true} opacity={0.5} />
            </div>
            <div className="inputs">
                <form action='' className="input-container">
                    <button type='button'><i className="fa-solid fa-border-all"></i></button>
                    <button type='button'><i className="fa-solid fa-image"></i></button>
                    <input type="text" placeholder='Pesan' />
                    <button type='button'><i className="fa-regular fa-face-smile"></i></button>
                    <button type='submit'><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default BaseChat
