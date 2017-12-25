import React from 'react';
import './../assets/scss/main.scss';
import {MDvisits} from './../assets/mock-data.js';
import VisitList from './VisitList.jsx';
import Detail from './Detail.jsx';
import { Panel } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import $ from 'jquery';

const divDetailStyle = {
    width: '1150px',
    float: 'right',
    position: 'relative',
};
const divVLStyle = {
    width: '300px',
    height: '500px',

};
const titulo = {
    backgroundColor: 'w3-aqua',
};

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.appVisitaClick = this.appVisitaClick.bind(this);
        this.favoritaAppClick = this.favoritaAppClick.bind(this);
        this.borrarFavoritaAppClick = this.borrarFavoritaAppClick.bind(this);
        this.state = {
            visitaSeleccionada: [],
            visits: [],

        };
    }
    appVisitaClick(indiceVisita) {
        this.setState({
            visitaSeleccionada: this.state.visits[indiceVisita],

        });

    }

  // metodo para descarga de los datos
    componentDidMount() {
        $.ajax({
            url: "https://dcrmt.herokuapp.com/api/visits/flattened?token=2d1ec9a7b08d5179dcc2",
            datatype: 'json',
            cache: false,
            success: function(data) {
                this.setState({visits: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(status, err.toString());
            },
        });
    }

    favoritaAppClick(idfav) {
        let urlfav = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + idfav + "?token=2d1ec9a7b08d5179dcc2&_method=PUT"
        $.get(urlfav);
        console.log("Añadir favorita"+ " " + urlfav);

    }
    borrarFavoritaAppClick(idborrarfav) {
        let urlborrarfav = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + idborrarfav + "?token=2d1ec9a7b08d5179dcc2&_method=DELETE"
        $.get(urlborrarfav);
        console.log("Borrar favorita"+ " " + urlborrarfav);

    }


    render() {
        let visitasO = this.state.visits;

        function OrdenarArray(arr) {
            let tmp = [];

            arr.forEach(function(val) { tmp[val.id] = val; });

            return tmp;
        }

        return (
     <div className= "w3-container w3-pale-blue">

         <Panel style={titulo} className="jumbotron w3-center w3-animate-left w3-container w3-aqua w3-border-blue w3-sepia">
             <h1>BIENVENIDO AL CRM</h1>
             <p> <i>g709</i></p>
             <div id="demo" className="carousel slide" data-ride="carousel">

                 <ul className="carousel-indicators">
                     <li data-target="#demo" data-slide-to="0" className="active" />
                     <li data-target="#demo" data-slide-to="1" />
                     <li data-target="#demo" data-slide-to="2" />
                 </ul>

                 <div className="carousel-inner">
                     <div className="carousel-item active">
                         <img src="./../assets/imagenes/crm.jpg" width="250" height="250" alt="crm"/>
                     </div>
                     <div className="carousel-item">
                         <img src="./../assets/imagenes/cliente.jpg" width="250" height="250" alt="cliente"/>
                     </div>
                     <div className="carousel-item">
                         <img src="./../assets/imagenes/objetivos.jpg" width="250" height="250" alt="objetivos"/>
                     </div>
                 </div>

                 <a className="carousel-control-prev" href="#demo" data-slide="prev">
                     <span className="carousel-control-prev-icon" />
                 </a>
                 <a className="carousel-control-next" href="#demo" data-slide="next">
                     <span className="carousel-control-next-icon" />
                 </a>

             </div>
         </Panel>
         <div style={divDetailStyle} className="w3-container w3-center w3-animate-top w3-container w3-pale-yellow">
             <Detail favoritaAppClick={this.favoritaAppClick} borrarFavoritaAppClick={this.borrarFavoritaAppClick} visitaSeleccionada={this.state.visitaSeleccionada}/>
         </div>
         <div style={divVLStyle}>
          <VisitList visits={visitasO} appVisitaClick={this.appVisitaClick}/>
         </div>

     </div>

        );
    }

}

