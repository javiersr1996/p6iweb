import React from 'react';
import VisitListElement from './VisitListElement.jsx';
import './../assets/scss/main.scss';
import { Panel } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';


const divVLStyle = {
    width: '300px',
    height: '500px',

};
export default class VisitList extends React.Component {

    constructor(props) {
        super(props);
        this.VLclick = this.VLclick.bind(this);
    }
    VLclick(indiceVisita) {
        this.props.appVisitaClick(indiceVisita);
    }

    render() {
        let visitasMap = this.props.visits;

        let visitas = visitasMap.map((visita, indiceVisita) => {
            let mykey = "" + indiceVisita;
            return (
                <VisitListElement visita={visita} key={mykey} indiceVisita={indiceVisita} VLclick={this.VLclick}/>
            );
        });




        return (

             <div>

                <Panel style={divVLStyle}> <h1 className="glyphicon glyphicon-list-alt"> Visitas </h1>
                    <Scrollbars style={{ width: 280, height: 400 }}>
                        {visitas}
                    </Scrollbars>
                </Panel>

             </div>


        );
    }

}
