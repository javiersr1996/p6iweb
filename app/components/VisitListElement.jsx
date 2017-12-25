import React from 'react';
import './../assets/scss/main.scss';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';




const button = {
     height: '250px',
     width: '250px',
};



export default class VisitListElement extends React.Component {
  constructor(props) {
      super(props);
      this.VLEclick = this.VLEclick.bind(this);
  }

  VLEclick()  {
      this.props.VLclick(this.props.indiceVisita);
  }
  render() {
   let foto = "";
   if (this.props.visita.id % 2 == 1){
        foto = "./../assets/imagenes/visita.jpg";
   }   else {
       foto = "./../assets/imagenes/visitaPar.jpg"
   }


    return (
        <div>
            <ul>
                <Button bsStyle="info" onClick={this.VLEclick} className="w3-sepia" >
                    <b>Visita número: {this.props.visita.id}</b>
                    <img src={foto} width="40" height="60" />
                </Button>
            </ul>
        </div>
        )
      }
    }

