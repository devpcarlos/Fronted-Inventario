import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Savequipos() {

    let navigate =useNavigate();

    const [savequipos, setsave] = useState({
        codigo_hsd: "",
        ip: "",
        marca: "",
        modelo: "",
        nombre_equipo: "",
        serial: ""
    });

    const { codigo_hsd, ip, marca, modelo, nombre_equipo, serial } = savequipos;

    const onInputChange = (e) => {

        setsave({ ...savequipos, [e.target.name]: e.target.value });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/equipos", savequipos);
        navigate("/");
    };


    return (
        /**container h-100: La clase h-100 hace que el contenedor ocupe el 100% de la altura del viewport.
        d-flex flex-column h-100 justify-content-center align-items-center: 
        Estas clases convierten el formulario en un contenedor de tipo flexbox con dirección de columna 
        y lo centran tanto vertical como horizontalmente en el contenedor padre. */

        <div className="container h-100">
            <h1 className="my-4">Formulario inventario de equipo</h1>

            <form onSubmit={(e)=>onSubmit(e) } className="d-flex flex-column h-100 justify-content-center align-items-center">

                <div className="mb-4 d-flex">
                    <label className="me-2">Codigo</label>
                    <input
                        className="form-control"
                        name="codigo_hsd"
                        type={"text"}
                        placeholder="Codigo"
                        value={codigo_hsd} 
                        onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-4 d-flex">
                    <label className="me-2">Puerto</label>
                    <input className="form-control"
                    name="ip"
                        type={"text"}
                        placeholder="Ip"
                        value={ip}
                        onChange={(e)=>onInputChange(e)} />
                </div>

                <div className="mb-4 d-flex">
                    <label className="me-2"> Marca</label>
                    <input
                        className="form-control"
                        name="marca"
                        type={"text"}
                        placeholder="Marca"
                        value={marca} 
                        onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-4 d-flex">
                    <label className="me-2"> Modelo</label>
                    <input
                        className="form-control"
                        name="modelo"
                        type={"text"}
                        placeholder="Modelo"
                        value={modelo} 
                        onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className="mb-4 d-flex">
                    <label className="me-2"> Equipo</label>
                    <input
                        className="form-control"
                        name="nombre_equipo"
                        type={"text"}
                        placeholder="Equipo"
                        value={nombre_equipo}
                        onChange={(e)=>onInputChange(e)} />
                </div>

                <div className="mb-4 d-flex">
                    <label className="me-2"> Serial</label>
                    <input
                        className="form-control"
                        name="serial"
                        type={"text"}
                        placeholder="Serial"
                        value={serial} 
                        onChange={(e)=>onInputChange(e)} />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <Link className="btn btn-danger" to={"/"}>Cancelar</Link>
                </div>
            </form>
        </div>
    )

}

export default Savequipos;