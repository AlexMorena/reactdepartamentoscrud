import React, { Component } from 'react';
import ServiceDepartamentos from '../service/ServiceDepartamentos';

export default class DeleteDepartamento extends Component {

    state = {
        departamento : []
    }

    service = new ServiceDepartamentos();
    confirmarEliminacionDepartamento = (departamento) => {
        this.service.confirmacionEliminacionDepartamento(departamento);
        this.setState({
            departamento: departamento
        })
    }

    render() {
        return (
            <div>
                {
                    <div>
                        <h3>¿Seguro que deseas eliminar el departamento {this.state.departamento.nombre} situado en 
                            {this.state.departamento.localidad}?</h3>
                    </div>
                }
                <button>Eliminar</button>
                <br></br>
                <button>Cancelar</button>

            </div>
        )
    }
}
