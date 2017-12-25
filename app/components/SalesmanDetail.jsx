import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './../assets/scss/main.scss';






export default class SalesmanDetail extends React.Component {


    render() {
        let nombreVendedor = "";
        let email = "";
        let telefono= "";
        let phone = ""
        let entradaSD = "";
        let foto = "";
        let alt = "";
        let nombreStyle = "list-group-item glyphicon glyphicon-user";
        let emailStyle = "list-group-item glyphicon glyphicon-envelope";
        let phoneStyle = "list-group-item glyphicon glyphicon-phone";


        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        if(!isEmpty(this.props.salesman)){
            nombreVendedor = "Nombre del vendedor:"+" "+ this.props.salesman.fullname;
            if(this.props.salesman.email1 == "" || this.props.salesman.email1 == null){
                email = "Email: no especificado";
            } else {
                email = "Email:" + " " + this.props.salesman.email1;
            }
            if(this.props.salesman.phone1 == "" || this.props.salesman.phone1 == null ){
                telefono = "Numero de telefono: no especificado";
            } else {
                telefono = "Numero de telefono:"+" "+this.props.salesman.phone1
            }
            entradaSD = "DETALLES DEL VENDEDOR";
            alt = "Norway";
            if (this.props.salesman.Photo == null){
                foto = "./../assets/imagenes/sinfoto.jpg"
            }else {
                foto = this.props.salesman.Photo.url;
            }

        } else {
            nombreVendedor = "";
            email = "";
            telefono= "";
            entradaSD = "";
            alt = "";
            nombreStyle = "list-group-item";
            emailStyle = "list-group-item";
            phoneStyle = "list-group-item";


        }



        return (
            <div className="w3-container w3-pale-blue">
                <h2> <b>{entradaSD}</b> </h2>
                <ul className="list-group">
                    <li className={nombreStyle}> {nombreVendedor} </li>
                    <li className={emailStyle}> {email} </li>
                    <li className={phoneStyle}> {telefono} </li>
                    <img src={foto} className="w3-circle" alt={alt} width="100" height="100" />
               </ul>
            </div>


        );

    }

}
