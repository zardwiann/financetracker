
import './login.css';


export default function Login() {
    return (
        <div>
            <section className>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10 ">
                            <div className="card rounded-3 text-black ">
                                <div className="row g-0 logincard">
                                    <div className="col-lg-6 loginform">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center">
                                                <img src="./logo192.png"
                                                    alt="logo" style={{ width: '185px' }} />
                                                <h4 className="mt-1 mb-5 pb-1 heading4">Finance Tracker Website</h4>
                                            </div>
                                            <form>
                                                <p>Please login to your account</p>
                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <input type="email" id="form2Example11" className="form-control"
                                                        placeholder="Phone number or email address" />

                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-2">
                                                    <input type="password" id="form2Example22" className="form-control" placeholder="Password" />

                                                </div>

                                                <div className="col-md-12 text-center">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block fa-lg gradient-custom-2 mb-3 col-md-12  text-white " type="button">Log
                                                        in</button> <p></p>

                                                </div>
                                                <a className="text-muted " href="#!">Forgot password?</a>

                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <button type="button " data-mdb-button-init data-mdb-ripple-init className="btn btn gradient-custom-2  text-white">Create new</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-3 ">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4"> 
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}