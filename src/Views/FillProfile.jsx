import { useState, useEffect, useContext } from "react";
import { putRequest } from "../utils/request";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

function FillProfile() {
    const [experiencias, setExperiencia] = useState([]);
    const [idiomas, setIdiomas] = useState([]);
    const [skills, setSkills] = useState([]);
    const [estudios, setEstudios] = useState([]);
    const [perfil, setPerfil] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState(false);
    const buttonStyle = { backgroundColor: "#1b4965", border: "none" };

    const handlePerfilChange = function (e) {
        setPerfil(e.target.value);
    };

    const handleUbicacionChange = function (e) {
        setUbicacion(e.target.value);
    };

    const handleDescripcionChange = function (e) {
        setDescripcion(e.target.value);
    };

    const addExperiencia = function (e) {
        e.preventDefault();
        const exp = e.target.form3Example4.value;
        if (exp !== undefined && exp !== "") {
            const updatedExperiencias = [...experiencias, exp];
            setExperiencia(updatedExperiencias);
            e.target.form3Example4.value = "";
        }
    };

    const findUser = function () {
        const usuario = JSON.parse(localStorage.getItem("user"));
        if (usuario !== null) {
            return setUser(usuario);
        }
        return navigate("/home");
    };

    const getExperiencias = function () {
        return experiencias.map((experiencia, key) => {
            return (
                <li className="my-3" key={key}>
                    {experiencia}
                </li>
            );
        });
    };

    const addEstudios = function (e) {
        e.preventDefault();
        const estudio = e.target.form3Example4.value;
        if (estudio !== undefined && estudio !== "") {
            const updatedEstudios = [...estudios, estudio];
            setEstudios(updatedEstudios);
            e.target.form3Example4.value = "";
        }
    };

    const getEstudios = function () {
        return estudios.map((estudio, key) => {
            return (
                <li className="my-3" key={key}>
                    {estudio}
                </li>
            );
        });
    };

    const addIdiomas = function (e) {
        e.preventDefault();
        const idioma = e.target.form3Example4.value;
        if (idioma !== undefined && idioma !== "") {
            const update = [...idiomas, idioma];
            setIdiomas(update);
            e.target.form3Example4.value = "";
        }
    };

    const getIdiomas = function () {
        return idiomas.map((idioma, key) => {
            return (
                <div
                    key={key}
                    className="col-auto border me-4 mt-2 rounded-pill ps-4 pt-1"
                >
                    {idioma}
                    <button className="btn">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            );
        });
    };

    const addSkills = function (e) {
        e.preventDefault();
        const skill = e.target.form3Example3.value;
        if (skill !== undefined && skill !== "") {
            const update = [...skills, skill];
            setSkills(update);
            e.target.form3Example3.value = "";
        }
    };

    const getSkills = function () {
        return skills.map((skill, key) => {
            return (
                <div
                    key={key}
                    className="col-auto border me-4 mt-2 rounded-pill ps-4 pt-1"
                >
                    {skill}
                    <button className="btn">
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            );
        });
    };

    const finishFill = async function (e) {
        const user2 = await putRequest(
            "/auth/fillProfile/" + user._id,
            {
                role: perfil,
                location: ubicacion,
                description: descripcion,
                experience: experiencias,
                estudios,
                skills,
                idiomas,
            }
        );
        return navigate("/");
    };

    useEffect(() => {
        findUser();
    }, []);

    useEffect(() => {}, [experiencias, idiomas, skills, estudios]);

    return (
        <div className="container">
            <div className="card p-5 m-5">
                <h5 className="text-center mb-2">
                    Una descripción bien detallada y extensa de tu perfil
                    profesional te ayudará a destacar entre otros candidatos, no
                    tomara mas de 5 minutos y te resaltara de otros candidatos
                </h5>
                <hr />
                <div className="form-outline mb-4 mt-2">
                    <label className="form-label" htmlFor="form3Example4">
                        Perfil
                    </label>
                    <input
                        type="text"
                        id="form3Example4"
                        placeholder="Estudiante, empleado, desempleado"
                        className="form-control"
                        onChange={(e) => handlePerfilChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Ubicacion
                    </label>
                    <input
                        type="text"
                        id="form3Example4"
                        placeholder="Barranquilla, Bogota"
                        className="form-control"
                        onChange={(e) => handleUbicacionChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Descripcion
                    </label>
                    <textarea
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleDescripcionChange(e)}
                    />
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addExperiencia(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Experiencias profesionales
                            </label>
                            <ul>{getExperiencias()}</ul>
                            <input
                                type="text"
                                id="form3Example4"
                                className="form-control"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addEstudios(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Estudios
                            </label>
                            <ul>{getEstudios()}</ul>
                            <input
                                type="text"
                                id="form3Example4"
                                className="form-control"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addIdiomas(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Idiomas
                            </label>
                            <div className="row">{getIdiomas()}</div>
                            <input
                                type="text"
                                id="form3Example4"
                                className="form-control mt-3"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addSkills(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Conocimientos y habilidades
                            </label>
                            <div className="row">{getSkills()}</div>
                            <input
                                type="text"
                                id="form3Example3"
                                className="form-control mt-3"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>
                <button
                    className="btn btn-primary mt-3 w-100"
                    style={buttonStyle}
                    onClick={(e) => finishFill(e)}
                >
                    Completar
                </button>
            </div>
        </div>
    );
}

export default FillProfile;
