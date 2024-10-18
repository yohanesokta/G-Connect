import "../../scss/auth/login.scss"


function LoginComponent() {
    return (<>
        <form action="" data-bs-theme="dark">
            <h3 className="text-light text-center p-4">Masuk</h3>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">+62</span>
                <input type="number" class="form-control" placeholder="555-555-2211" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <p className="text-info">Pastikan nomor terdaftar di whatssapp</p>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Kirim Kode</button>
            </div>
        </form>
    </>)

}
function OtpComponent() {
    return (<>
        <form action="" data-bs-theme="dark">
            <h3 className="text-light text-center p-4">Masuk</h3>
            <div class="input-group gap-2 mb-3">
                <input type="tel" class="text-center form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <p className="text-info">Kembali untuk mengirim ulang. <a href="/login">Kembali</a></p>
            <div class="d-grid gap-2">
                <button class="btn btn-primary" type="submit">Masuk</button>
            </div>
        </form>
    </>)

}

function Login() {

    return (
        <>
            <div className="container">
                <div className="page">
                    <LoginComponent />
                    <p className="m-4 text-center text-secondary">Product Yohanes Oktanio 2024</p>
                </div>
            </div>
        </>
    );
}

export default Login;