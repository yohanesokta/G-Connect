import  { useEffect, useState } from 'react'
import "../../scss/menus/windows-global.scss"
import DsChat from "./DsChat"
import BaseChat from './BaseChat'

const WindowChat = () => {
    const [Dashboard, SetDashboard] = useState(<DsChat />)
    const [Window,SetWindow] = useState(<></>)
    const onOffDashboard = () => {
        if (Dashboard) {
            SetDashboard()
        } else {

            SetDashboard(<DsChat />)
        }
    }

    const Protected = async() => {
        try{
            fetch('http://localhost:4000/user',{
                method: "POST",
                credentials:"include",
                headers:{
                  "Content-Type":"application/json"
                }
              }).then(e => e.json()).then((e)=>{
                if (e.status.code != "200"){
                    window.location.href = "/login"
                }else{
                    SetWindow(<windowOpen/>)
                }
              })
        }catch(err){
            console.log(err)
            window.location.href = "/login"
        }
        
      }
      Protected()
    const windowOpen = ()=>{  
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

    return (<Window/>)
}

export default WindowChat
