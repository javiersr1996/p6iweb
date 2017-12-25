import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './../assets/scss/main.scss';
import TargetElement from './TargetElement';





export default class TargetDetail extends React.Component {


    render() {

        let objetivos = "";
        let titulo = "";

        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }

        if(!isEmpty(this.props.targets)){

             objetivos = this.props.targets.map((objetivo, indiceTargets) => {
                let key = "" + indiceTargets;
                return (
                    <TargetElement objetivo={objetivo} key={key} indiceTargets={indiceTargets}/>
                );
            });
             titulo = "OBJETIVOS";

        } else {

           objetivos = "";
           titulo = "";
        }


        return (
            <div className="w3-container w3-sand">
                <h2> <b>{titulo}</b> </h2>
                <li className="list-group-item">{objetivos}</li>

            </div>


        );

    }

}
