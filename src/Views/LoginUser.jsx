import { useState } from "react";

function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic using email and password state
    };

    return (
        <div
            className="px-4 py-5 px-md-5 text-center text-lg-start d-flex align-items-center"
            style={{ backgroundColor: "hsl(0, 0%, 96%)", height: "100vh" }}
        >
            <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-3 fw-bold ls-tight">
                            Las mejores ofertas de empleo con <span></span>
                            <span className="text" style={{ color: "#1b4965" }}>
                                HireMeNow
                            </span>
                        </h1>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body py-5 px-md-5">
                                <form>
                                    <div className="form-outline mb-4">
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control"
                                            onClick={(e) =>
                                                handleEmailChange(e)
                                            }
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4"
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            id="form3Example4"
                                            className="form-control"
                                            onClick={(e) =>
                                                handlePasswordChange(e)
                                            }
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary mb-4 w-100"
                                    >
                                        Log in
                                    </button>

                                    <div className="text-center">
                                        <p>o ingrese con:</p>
                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-facebook"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-google"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-twitter"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-github"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginUser;