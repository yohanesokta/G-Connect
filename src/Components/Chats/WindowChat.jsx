import React, { useRef, useState } from 'react'
import "../../scss/menus/windows-global.scss"
import DsChat from "./DsChat"
import BaseChat from './BaseChat'

const WindowChat = () => {
    const [Dashboard, SetDashboard] = useState(<DsChat />)
    const onOffDashboard = () => {
        if (Dashboard) {
            SetDashboard()
        } else {

            SetDashboard(<DsChat />)
        }
    }
    return (
        <div className="globalWindowChat">
            <div className="window-chat">
                {Dashboard}
                <div className="base-chat">
                    <button onClick={onOffDashboard} >
                        ||
                    </button>
                    <BaseChat />
                </div>
            </div>
        </div>
    )
}

export default WindowChat
