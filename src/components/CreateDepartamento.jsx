import React, { Component } from 'react';
import ServiceDepartamentos from '../service/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    service = new ServiceDepartamentos();

    state = {
        mensaje: "",
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        this.service.insertDepartamento(departamento)
            .then((result) => {
                this.setState({
                    status: true
                })
            }).catch((error) => {
                this.setState({
                    mensaje: error.message
                })
            })
    }


    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div>
                    <h1>Crear Departamentos</h1>
                    {
                        this.state.mensaje &&
                        (<p style={{ color: "red" }}>{this.state.mensaje}</p>)
                    }
                    <form>
                        <label>Inserta el número de departamento</label>
                        <input type="number" ref={this.cajaNumero} className="form-control" />
                        <label>Inserta el nombre de departamento</label>
                        <input type="text" ref={this.cajaNombre} className="form-control" />
                        <label>Inserta la localidad del departamento</label>
                        <input type="text" ref={this.cajaLocalidad} className="form-control" />
                        <br></br>
                        <button onClick={this.insertDepartamento} className='btn btn-warning'>Crear</button>
                    </form>
                </div>
            )
        }
    }
}
