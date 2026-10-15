import React, { Component } from 'react'
import ServiceDepartamentos from '../service/ServiceDepartamentos';
import { Navigate } from 'react-router-dom';

export default class UpdateDepartamento extends Component {
    cajaNumero = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    service = new ServiceDepartamentos();

    state = {
        status : false
    }

    updateDepartamento = (event) => {
        event.preventDefault();
        let departamento = {
            numero: parseInt(this.cajaNumero.current.value),
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }
        this.service.updateDepartamento(departamento).then((result) => {
            this.setState({
                status : true
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.status == true &&
                    (<Navigate to="/"/>)
                }
                <h1>Update Departamento</h1>
                <h2>Id: {this.props.id}</h2>
                <h2>Nombre: {this.props.nombre}</h2>
                <h2>Localidad: {this.props.localidad}</h2>
                <form>
                    <label>ID del departamento</label>
                    <input type="number" ref={this.cajaNumero} defaultValue={this.props.id} className='form-control' disabled/>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajaNombre} defaultValue={this.props.nombre} className='form-control'/>
                    <label>Localidad </label>
                    <input type="text" ref={this.cajaLocalidad} defaultValue={this.props.localidad} className='form-control'/>
                    <br></br>
                    <button onClick={this.updateDepartamento} className="btn btn-info">
                        Actualizar
                    </button>

                </form>
            </div>
        )
    }
}
