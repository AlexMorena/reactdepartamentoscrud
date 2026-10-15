import axios from "axios";
import Global from "../Global";


export default class ServiceDepartamentos {

    insertDepartamento(departamento) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos";

            axios.post(url + request, departamento)
                .then((response) => {
                    console.log("Insertando");
                    resolve(response);
                }).catch((error) => {
                    reject(error)
                })
        })
    }

    eliminarDepartamento(idDepartamento) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos/" + idDepartamento;

            axios.delete(url + request).then((response) => {
                console.log("Eliminando departamento con ID " + idDepartamento);
                resolve(response)
            })
        })
    }

    confirmacionEliminacionDepartamento(departamento){
        return new Promise(function (resolve, reject){
            let url = Global.urlApiDepartamentos;
            let request = "api/departamentos/" + departamento.numero;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }

    cargarDepartamentos() {
        return new Promise(function (resolve) {
            let request = "api/departamentos";
            let url = Global.urlApiDepartamentos;

            axios.get(url + request).then((response) => {
                resolve(response.data);
            })
        })
    }
    
    updateDepartamento(departamento) {
        return new Promise(function(resolve) {
            let url= Global.urlApiDepartamentos;
            let request = "api/departamentos";

            axios.put(url + request, departamento).then((response) => {
                resolve(response)
            })
        })
    }

}