import Ads from "../components/Ads";
import { useNavigate } from "react-router-dom";

function CV({ user }) {
    const navigate = useNavigate();

    console.log(user.image);

    const completaTuPerfil = function (text) {
        return (
            <div>
                <p>
                    {text}{" "}
                    <a
                        href="/fillProfile"
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                    >
                        aqui
                    </a>
                </p>
            </div>
        );
    };

    return (
        <div>
            <div className="row justify-content-start">
                <div className="col-8">
                    <div className="card px-5 py-5 mb-4">
                        <div className="row">
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src={
                                            typeof user.image !== "undefined"
                                                ? user.image
                                                : "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                                        }
                                        className="img-fluid rounded w-75 h-75"
                                    />
                                </div>

                                <div className="col-8">
                                    <h4>
                                        {user.firstName} <span></span>{" "}
                                        {user.lastName}
                                    </h4>
                                    <p>
                                        {user.location ? (
                                            user.location
                                        ) : (
                                            <div>
                                                {completaTuPerfil(
                                                    "Añada su ubicacion"
                                                )}
                                            </div>
                                        )}
                                    </p>
                                    <p>
                                        <i className="bi bi-envelope me-2"></i>
                                        {user.email}{" "}
                                        <i className="bi bi-telephone me-5 ms-3">
                                            +57 {user.cellphone}
                                        </i>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-2">
                                <h4>
                                    {user.role ? (
                                        user.role
                                    ) : (
                                        <div>
                                            {completaTuPerfil(
                                                "Añada su perfil"
                                            )}
                                        </div>
                                    )}
                                </h4>
                                <p>
                                    {user.description ? (
                                        user.description
                                    ) : (
                                        <div
                                            className="card px-3 py-3"
                                            style={{
                                                backgroundColor: "#e9ebf6",
                                            }}
                                        >
                                            Una descripción bien detallada y
                                            extensa de tu perfil profesional te
                                            ayudará a destacar entre otros
                                            candidatos.
                                        </div>
                                    )}
                                </p>
                            </div>

                            <div
                                className="mt-5"
                                style={{ whiteSpace: "pre-wrap" }}
                            >
                                <h4>Mis experiencias profesionales</h4>
                                <ul>
                                    {user.experience.length !== 0 ? (
                                        user.experience.map(
                                            (experiencia, key) => {
                                                return (
                                                    <li
                                                        className="my-3"
                                                        key={key}
                                                    >
                                                        {experiencia}
                                                    </li>
                                                );
                                            }
                                        )
                                    ) : (
                                        <div>
                                            {completaTuPerfil(
                                                "Añada experiencia laboral"
                                            )}
                                        </div>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4>Mis estudios</h4>
                                <ul>
                                    {user.estudios.length !== 0 ? (
                                        user.estudios.map((estudio, key) => {
                                            return (
                                                <li className="my-3" key={key}>
                                                    {estudio}
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <div>
                                            {completaTuPerfil("Añada estudios")}
                                        </div>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4>Idiomas</h4>
                                <div className="row">
                                    {user.idiomas.length !== 0 ? (
                                        user.idiomas.map((idioma, key) => {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-auto border rounded-pill py-2 px-3 me-2"
                                                >
                                                    {idioma}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>
                                            {completaTuPerfil("Añada idiomas")}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4>Conocimientos y habilidades</h4>
                                <div className="row">
                                    {user.skills.length !== 0 ? (
                                        user.skills.map((habilidad, key) => {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-auto border  rounded-pill px-3 py-3 me-2"
                                                >
                                                    {habilidad}
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>
                                            {completaTuPerfil(
                                                "Añada conocimientos y habilidades"
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="row mt-5">
                                <button
                                    className="btn btn-primary"
                                    style={{
                                        backgroundColor: "#1b4965",
                                        border: "none",
                                    }}
                                    onClick={(e) => navigate("/fillProfile")}
                                >
                                    Edita tu perfil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ms-5">
                    <Ads />
                </div>
            </div>
        </div>
    );
}

export default CV;
