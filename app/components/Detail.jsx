import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './../assets/scss/main.scss';
import CustomerDetail from './CustomerDetail';
import SalesmanDetail from "./SalesmanDetail";
import TargetDetail from './TargetDetail';
import { Button} from 'react-bootstrap';


const salesmanDetailStyle = {
    float:'right',
    position: 'relative',

}



export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.favoritaClick = this.favoritaClick.bind(this);
        this.borrarFavoritaClick = this.borrarFavoritaClick.bind(this);
        this.state = {
            fav : "no",

        };
    }

    favoritaClick(){
        let idfav = this.props.visitaSeleccionada.id;
        if(idfav !== undefined){
            this.props.favoritaAppClick(idfav);
            console.log("Visita"+ " "+ idfav +" " + "marcada como favorita");
            this.setState({
               fav : "sí",
            });
        } else {
            console.log("indefinido");
        }
    }
    borrarFavoritaClick(){
        let idborrarfav = this.props.visitaSeleccionada.id;
        if(idborrarfav !== undefined){
            this.props.borrarFavoritaAppClick(idborrarfav);
            console.log("Visita" + " " + idborrarfav + " " +  "desmarcada como favorita");
            this.setState({
                fav : "no",
            })
        } else {
            console.log("indefinido");
        }
    }



    render() {
        let auxPlannedFor = "";
        let auxFulfilledAt = "";
        let datePlannedFor = "";
        let dateFulfilledAt = "";
        let dpf = "";
        let dfa = "";
        let indicadorFavorita = "Favorita:" + " " +this.state.fav;
        let favorita = "Marcar como favorita";
        let desmarcarFavorita = "Desmarcar como favorita";
        let estiloFav = "success";
        let estiloDesFav = "warning";
        let estrellaFav = "glyphicon glyphicon-star"
        let estrellaDesFav = "glyphicon glyphicon-star-empty"
        let notasEstilo = "list-group-item glyphicon glyphicon-pencil";
        let fechaEstilo = " list-group-item  glyphicon glyphicon-calendar";
        let detalleEstilo = "glyphicon glyphicon-info-sign";

        let customer = this.props.visitaSeleccionada.Customer;
        let salesman = this.props.visitaSeleccionada.Salesman;
        let targets = ""
        let detalle = ""
        let notasVisita = "";
        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        if(!isEmpty(this.props.visitaSeleccionada)){


            detalle = "DETALLE DE LA VISITA NUMERO" +" "+ this.props.visitaSeleccionada.id;
            targets = this.props.visitaSeleccionada.Targets;
            if(this.props.visitaSeleccionada.notes == null || this.props.visitaSeleccionada.notes == ""){
                notasVisita = "No hay notas sobre la visita";
            } else {
                notasVisita = "Notas de la visita:"+ " "+ this.props.visitaSeleccionada.notes;

            }
             auxPlannedFor = this.props.visitaSeleccionada.plannedFor.toString().split('T');
             datePlannedFor = auxPlannedFor[0];
             dpf = "Visita planificada para la fecha:" + " " + datePlannedFor;
            if (this.props.visitaSeleccionada.fulfilledAt != null) {
                auxFulfilledAt = this.props.visitaSeleccionada.fulfilledAt.toString().split('T');
                dateFulfilledAt = auxFulfilledAt[0];
                dfa = "Visita cumplida en la fecha" + " " + dateFulfilledAt;
            } else {
                dfa = "La visita no se ha cumplido por el momento";
            }
        } else {

            detalle = "SELECCIONE LA VISITA A DETALLAR"
            targets = ""
            notasVisita = "";
            auxPlannedFor = "";
            datePlannedFor = "";
            dateFulfilledAt = "";
            dfa ="";
            dpf = "";
            favorita = "";
            desmarcarFavorita = "";
            estiloFav = "default";
            estiloDesFav = "default";
            estrellaFav = "";
            estrellaDesFav = "";
            notasEstilo = "list-group-item";
            fechaEstilo = "list-group-item";
            detalleEstilo = "";
            indicadorFavorita = "";
        }

           return (
              <div>
                  <h1 className={detalleEstilo}> {detalle}</h1>
                  <ul className="list-group">
                         <li className={notasEstilo}> {notasVisita}</li>
                         <li className={fechaEstilo}> {dpf}</li>
                         <li className={fechaEstilo}> {dfa}</li>
                         <li className="list-group-item"> {indicadorFavorita}</li>
                         <Button bsStyle={estiloFav} className={estrellaFav} onClick={this.favoritaClick}> {favorita}</Button>
                         <Button bsStyle={estiloDesFav} className={estrellaDesFav} onClick={this.borrarFavoritaClick}> {desmarcarFavorita}</Button>
                  </ul>
                  <CustomerDetail customer={customer}/>
                  <SalesmanDetail  style={salesmanDetailStyle} salesman={salesman}/>
                  <TargetDetail  targets={targets} />
              </div>
           );

    }

}
