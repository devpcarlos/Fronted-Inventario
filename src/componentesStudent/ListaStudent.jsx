import React from "react";  
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ListadoS() { 

    const [equipos, setequipos]=useState([]);

    useEffect(()=>{
     cargar();
    }, []);

    
    const cargar = async () => {
        try {
            const result = await axios.get("http://localhost:8080/equipos");
            console.log(result.data);
            if (Array.isArray(result.data)) {
                setequipos(result.data);
            } else {
                console.error("La respuesta de la API no contiene un array de estudiantes");
            }
        } catch (error) {
            console.error("Error al cargar estudiantes", error);
        }
    };

    return (

        <div className="container">
            <table className="table caption-top">
                <caption>Listado de equipos</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Ip</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Serial</th>
                    </tr>
                </thead>
                <tbody>

                    { Array.isArray(equipos) && equipos.length > 0 ?(
                    equipos.map((st, index)=>(
                      <tr  key={st.id}>
                        <th scope="row">{index+1}</th>
                        <td>{st.codigo_hsd}</td>
                        <td>{st.ip}</td>
                        <td>{st.marca}</td>
                        <td>{st.modelo}</td>
                        <td>{st.nombre_equipo}</td>
                        <td>{st.serial}</td>
                    </tr>

                        ))
                    ):(

                        <tr>
              <td colSpan="6">Cargando estudiantes...</td>
            </tr>
                    )}
                    
                </tbody>              
            </table>
            <Link className="btn btn-info my-4"  to={"/guardar"}>Agregar nuevo equipo</Link>
        </div>

    )

}

export default ListadoS;