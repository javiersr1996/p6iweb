import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './../assets/scss/main.scss';

export default class TargetElement extends React.Component {

    render() {
        let targetType = this.props.objetivo.TargetType.name;
        let tT = "";
        let nameCompany = this.props.objetivo.Company.name;
        let nC = "";
        let webCompany = this.props.objetivo.Company.web1;
        let wC = "";
        let notesCompany = this.props.objetivo.Company.notes;
        let noC = "";
        let success = "";
        let successStyle = "list-group-item glyphicon glyphicon-ok-circle";
        let ncStyle = "list-group-item glyphicon glyphicon glyphicon-briefcase";
        let webStyle = "list-group-item glyphicon glyphicon glyphicon-globe";
        let nocStyle = "list-group-item glyphicon glyphicon glyphicon-pencil";
        let tipoStyle = "glyphicon glyphicon-paperclip";

        function isEmpty(obj) {
            for(let key in obj) {
                if(obj.hasOwnProperty(key))
                    {return false;}
            }
            return true;
        }

        if(!isEmpty(this.props.objetivo)) {

            if(targetType == null || targetType == "") {
                tT = "Tipo: no especificado";

            } else {
                tT =  targetType;
            }
            if(nameCompany == null || nameCompany == "") {
                nC = "Nombre de la empresa: no especificado";
            } else {
                nC = "Nombre de la empresa:" + " " + nameCompany;
            }

            if(webCompany == null || webCompany == "") {
                wC = "Web: no especificado";
            } else {
                wC = "Web:" + " " + webCompany;
            }
            if(notesCompany == null || notesCompany == "") {
                noC = "Notas: no especificado";
            } else {
                noC = "Notas:" + " " + notesCompany;
            }
            if(this.props.objetivo.success == true) {
                success = "Objetivo realizado con éxito";
            } else if (this.props.objetivo.success == false) {
                success = "Objetivo no realizado";
                successStyle = "list-group-item glyphicon glyphicon-remove-circle"
            } else {
                success = "Objetivo pendiente";
                successStyle = "list-group-item glyphicon glyphicon-time"
            }

        } else {
            tT = "";
            nC = "";
            wC = "";
            noC = "";
            success = "";
            successStyle = "list-group-item";
            ncStyle = "list-group-item";
            webStyle = "list-group-item";
            nocStyle = "list-group-item";
            tipoStyle = "";
        }

        return (
          <div>
              <h3 className={tipoStyle}><b> {tT}</b></h3>
            <ul className="list-group">
                <li className={successStyle}> {success}</li>
                <li className={ncStyle}> {nC}</li>
                <li className={webStyle}> {wC}</li>
                <li className={nocStyle}> {noC}</li>

            </ul>
          </div>
        );
    }
}
