import React, { Component } from 'react';
import loading from '../assets/images/loading.gif';
import ServiceDepartamentos from '../service/ServiceDepartamentos';
import { NavLink } from 'react-router-dom';

export default class HomeComponent extends Component {
    state = {
        status: false,
        departamentos: []
    }

    service = new ServiceDepartamentos();

    cargarDepartamentos = () => {
        this.service.cargarDepartamentos().then((result) => {
            this.setState({
                departamentos: result,
                status: true
            })
        })
    }

    eliminarDepartamento = (idDepartamento) => {
        this.service.eliminarDepartamento(idDepartamento).then((result) => {
            this.cargarDepartamentos();
        })
    }

    componentDidMount = () => {
        this.cargarDepartamentos();
    }



    render() {
        if (this.state.status == true) {
            return (
                <div>
                    <h1>Home Component</h1>
                    <h2>Departamentos</h2>
                    <table className='table table-primary'>
                        <thead>
                            <tr>
                                <th>Numero</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((dep, index) => {
                                    return (<tr key={index}>
                                        <td>{dep.numero}</td>
                                        <td>{dep.nombre}</td>
                                        <td>{dep.localidad}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => {
                                                this.eliminarDepartamento(dep.numero)
                                            }}>Eliminar</button><br></br>
                                            <NavLink className="btn btn-info" to={"/update/" +
                                                dep.numero + "/"
                                                + dep.nombre + "/"
                                                + dep.localidad} >
                                                    Editar
                                                </NavLink>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (<img src={loading} alt="loading..." />)
        }
    }
}
