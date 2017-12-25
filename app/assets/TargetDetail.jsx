import React from 'react';
import './../assets/scss/main.scss';






export default class TargetDetail extends React.Component {


    render() {
        console.log(this.props.targets);


        function isEmpty(obj) {
            for(var key in obj) {
                if(obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }



        return (
            <div>

            </div>


        );

    }

}
