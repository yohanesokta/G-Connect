import "../../scss/menus/messages.scss"


const Message = ({ formMe, opacity }) => {
    return (
        <div className={(formMe) ? "base-message fromMe" : "base-message"}>
            <div className="message-col" style={{ opacity }}>
                <div className="message">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor aperiam iusto fuga? Corporis voluptate dignissimos amet incidunt adipisci iusto?</span>
                    <div className="time">
                        <div className="block"></div>
                        <span>21.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
