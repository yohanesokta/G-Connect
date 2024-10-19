import React from 'react'
import "../../scss/menus/base-chat.scss"

const BaseChat = () => {
    return (
        <div className='min-base-chat'>
            <div className="navigation">

            </div>
            <div className="chat-pull">

            </div>
            <div className="inputs">
                <form action='' className="input-container">
                    <button type='button'><i class="fa-solid fa-border-all"></i></button>
                    <button type='button'><i class="fa-solid fa-image"></i></button>
                    <input type="text" placeholder='Pesan' />
                    <button type='button'><i class="fa-regular fa-face-smile"></i></button>
                    <button type='submit'><i class="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default BaseChat
