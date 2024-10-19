import "../../scss/menus/messages.scss"


const Message = ({ formMe, opacity, onImaage, UrlImage }) => {
    return (
        <div className={(formMe) ? "base-message fromMe" : "base-message"}>
            <div className={(onImaage) ? "message-col imageM" : "message-col"} style={{ opacity }}>
                {(onImaage) ?
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7D65ZbOHV_-htZkSWp3I6h_ZeHTI7HVbYw&s" alt="" /> : ""
                }
                <div className="message">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus accusantium doloribus incidunt saepe similique minima nulla vel, sit quo amet odit delectus aspernatur fuga voluptatum iste, voluptate, praesentium vero!</span>
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
