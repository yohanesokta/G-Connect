import React, { useRef, useState } from 'react'
import "../../scss/menus/base-chat.scss"
import Message from './Message'
import Picker from 'emoji-picker-react'


const BaseChat = () => {
    const [Emoji, SetEmoji] = useState(false)
    const inputRef = useRef()
    const upEmoji = () => { (Emoji) ? SetEmoji(false) : SetEmoji(true) }
    const DownEmoji = () => { if (Emoji) SetEmoji(false) }
    const EmojiClick = (emote) => {
        inputRef.current.value += emote.emoji
    }
    return (
        <div className='min-base-chat' data-bs-theme="dark">

            <div className="navigation">
                <nav className="navbar ">
                    <div className="container-fluid">
                        <a className="navbar-brand">Yohanes Oktanio</a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Cari Pesan" aria-label="Search"></input>
                            <button className="btn text-light bg-bg-success px-4" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </nav>
            </div>
            <div className="chat-pull">

                <Message onImaage={true} />
                <Message formMe={true} />
                <Message formMe={true} opacity={0.5} />
            </div>
            <div className="inputs">
                <div className="emoji-picker">
                    {(Emoji) ?
                        <Picker theme='dark' lazyLoadEmojis autoFocusSearch onEmojiClick={EmojiClick} />
                        : ""}
                </div>

                <form action='' className="input-container" onClick={DownEmoji}>
                    <button type='button'><i className="fa-solid fa-border-all"></i></button>
                    <button type='button'><i className="fa-solid fa-image"></i></button>
                    <input ref={inputRef} type="text" placeholder='Pesan' />
                    <button type='button' name='emoji' onClick={upEmoji} ><i className="fa-regular fa-face-smile"></i></button>
                    <button type='submit'><i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default BaseChat
