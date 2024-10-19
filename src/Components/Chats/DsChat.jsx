import "../../scss/menus/dashboard.scss"
const DsChat = () => {
    return (
        <>
            <div className="ds-header gap-2" data-bs-theme="dark">
                <nav className="navbar px-2 navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">Chats</a>

                        <button type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <form className="dropdown-menu p-4 gap-2">
                            <div className="mb-3">
                                <label for="exampleDropdownFormEmail2" className="form-label">Chat to : </label>
                                <input type="text" className="form-control" id="exampleDropdownFormEmail2" placeholder="555-222-2123"></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Chats</button>
                            <button type="submit" className="btn btn-info mx-2">Setting</button>
                        </form>
                    </div>
                </nav >
                <div id="name-number">
                    {/* ini untuk perulangan */}
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">3</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>


                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-2 my-2" id="card-name">
                        <img src="https://png.pngtree.com/png-clipart/20220622/original/pngtree-image-icon-png-image_8177635.png" alt="" />
                        <div className="space-name">
                            <p className="text-light contact-name">Yohanes Oktanio</p>
                            <span className="contant-last-chat">Pcc</span>
                            <div className="notif">
                                <p className="l-chat">99</p>
                                <p className="time">21.00</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div >



        </>
    )
}

export default DsChat
