import { useState, useEffect } from "react";
import JobExpanded from "./JobExpanded";
import { getRequest } from "../utils/request";

function Likes({ user }) {
    const [jobView, setJobView] = useState(false);
    const [jobLikes, setLikes] = useState([]);

    const goBack = function (e) {
        e.preventDefault();
        setJobView(false);
    };

    const getJob = function (e, jobId) {
        e.preventDefault()
        console.log(jobId)
        setJobView(jobLikes.find((job) => job._id === jobId));
    };

    const getJobsLikes = async function () {
        const jobs = await getRequest("/auth/jobLikes/" + user._id);
        setLikes(jobs);
    };

    useEffect(() => {
        getJobsLikes();
    }, [jobLikes]);


    return (
        <div className="my-3">
            {jobView ? (
                <div>
                    <button
                        className="btn btn-light fs-5 border rounded-pill"
                        onClick={(e) => goBack(e)}
                    >
                        <i className="bi bi-arrow-left me-3"></i>
                        Volver al listado
                    </button>

                    <div className="row mt-4">
                        <div className="col-11">
                            <JobExpanded job={jobView} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Mis favoritos</h2>
                    <div className="row gx-0 justify-content-start mt-4">
                        <div className="col-8">
                            {jobLikes.length !== 0 ? (
                                jobLikes.map((anuncio, key) => {
                                    return (
                                        <div
                                            className="card me-4 mb-4 pt-3 px-4"
                                            key={key}
                                            id="applications"
                                            onClick={(e) =>
                                                getJob(e, anuncio._id)
                                            }
                                        >
                                            <div className="row g-0">
                                                <div className="col-md-8">
                                                    <h5>{anuncio.title}</h5>
                                                    <p>
                                                        {anuncio.company}{" "}
                                                        <i
                                                            className="bi bi-star-fill"
                                                            style={{
                                                                color: "yellow",
                                                            }}
                                                        ></i>{" "}
                                                        {anuncio.rating}{" "}
                                                        <span> </span>
                                                        {anuncio.location}
                                                    </p>
                                                </div>

                                                <div className="col-md-4 d-flex justify-content-end">
                                                    <div className="my-3">
                                                        <button
                                                            className="btn btn-primary btn-lg rounded-pill me-4"
                                                            style={{
                                                                backgroundColor:
                                                                    "#1B4965",
                                                                border: "none",
                                                            }}
                                                        >
                                                            Aplicar
                                                        </button>
                                                        <button className="btn btn-danger btn-lg rounded-circle">
                                                            <i className="bi bi-heart"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div
                                    className="card px-3 py-3 me-3"
                                    style={{
                                        backgroundColor: "#e9ebf6",
                                    }}
                                >
                                    No tienes empleos que hayas guardado
                                </div>
                            )}
                        </div>
                        <div className="col-4">
                            <div className="card me-5">
                                <img
                                    src="https://www.lahora.com.ec/wp-content/uploads/2022/03/busqueda-trabajo-remoto-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body">
                                    Guarda con un ❤ las ofertas de empleo que
                                    más te interesan y postúlate cuando lo
                                    desees
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <button
                                        className="btn btn-primary w-75 rounded-pill"
                                        style={{
                                            backgroundColor: "#1B4965",
                                            border: "none",
                                        }}
                                    >
                                        Buscar empleos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Likes;
