import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './../assets/scss/main.scss';

export default class CustomerDetail extends React.Component {

    render() {
        let nombreCliente = "";
        let direccion = "";
        let telefono = "";
        let entradaCD = "";
        let postalCode = "";
        let nombreStyle = "list-group-item glyphicon glyphicon-user"
        let direccionStyle ="list-group-item glyphicon glyphicon-home"
        let phoneStyle = "list-group-item glyphicon glyphicon-phone"

        function isEmpty(obj) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    {return false;}
            }
            return true;
        }

        if(!isEmpty(this.props.customer)) {
            nombreCliente = "Nombre del cliente:" + " " + this.props.customer.name;
            if (this.props.customer.postalCode == "" || this.props.customer.postalCode == null) {
                postalCode = "no especificado";
            } else {
                postalCode == this.props.customer.postalCode;
            }
            direccion = "Vive en" + " " + this.props.customer.address1 + " " + "CP: " + postalCode;
            telefono = "Numero de telefono:" + " " + this.props.customer.phone1;
            entradaCD = "DETALLES DEL CLIENTE";

        } else {
            nombreCliente = "";
            direccion = "";
            entradaCD = "";
            nombreStyle = "list-group-item";
            direccionStyle = "list-group-item";
            phoneStyle = "list-group-item";

        }

        return (
            <div className="w3-container w3-pale-red">
                <h2> <b>{entradaCD}</b> </h2>
               <ul className="list-group">
                <li className={nombreStyle}> {nombreCliente} </li>
                <li className={direccionStyle}> {direccion} </li>
                <li className={phoneStyle}> {telefono} </li>
               </ul>
            </div>

        );

    }

}
