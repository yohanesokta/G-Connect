import {  useRef, useState } from "react";
import "../../scss/auth/login.scss";
const endPoint = "http://localhost:4000";

// eslint-disable-next-line react/prop-types
function LoginComponent({otp}) {
  const number = useRef();
  const FormControl = async (e) => {
    e.preventDefault();
    const num = "62" + number.current.value;
    try {
      let data = await fetch(endPoint + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: num,
        }),
      });
      data = await data.json();
      if (data.status.code == "200") {
        localStorage.setItem("num",num)
        otp()
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={FormControl} data-bs-theme="dark">
        <h3 className="text-light text-center p-4">Masuk</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            +62
          </span>
          <input
            type="number"
            ref={number}
            className="form-control"
            placeholder="555-555-2211"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <p className="text-info">Pastikan nomor terdaftar di whatssapp</p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Kirim Kode
          </button>
        </div>
      </form>
    </>
  );
}
function OtpComponent() {
    async function verif(e) {
        e.preventDefault()
        const code = e.target[0].value
        const number = localStorage.getItem("num")
        try{
        let data = await fetch(endPoint+"/auth/verif",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                number,
                otp:code
            })
        })
        data = await data.json()
        if (data.status.code == "200"){
            window.location.href = "/chats"
        }
    }catch(eroor){
        console.error(eroor)
    }

    }

  return (
    <>
      <form action="" onSubmit={verif} data-bs-theme="dark">
        <h3 className="text-light text-center p-4">Masuk ( OTP )</h3>
        <div className="input-group gap-2 mb-3">
          <input
            type="tel"
            className="text-center form-control"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
        <p className="text-info">
          Kembali untuk mengirim ulang. <a href="/login">Kembali</a>
        </p>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Masuk
          </button>
        </div>
      </form>
    </>
  );
}

function Login() {
    const [Otp,SetOtp] = useState(false)
    function enableOtp(){
        console.log("true")
        SetOtp(true)
    }
  return (
    <>
      <div className="canvas">
        <div className="page">
          {Otp ? <OtpComponent/> : <LoginComponent otp={enableOtp}/>}
          <p className="m-4 text-center text-secondary">
            Product Yohanes Oktanio 2024
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
