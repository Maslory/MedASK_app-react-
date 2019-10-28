import React from 'react';
import '../style/style.sass';




class Type_of_insurance extends React.Component {
    constructor(props){
        super(props)
        this.getOMS = this.getOMS.bind(this)
        this.getDMS = this.getDMS.bind(this)
        this.props.OMSDMS
    }
    getOMS(){
        let OMS = document.getElementById('OMS');
        OMS.style.background = '#ED462F';
        OMS.style.color = '#FFFFFF';
        DMS.style.background ='#FFFFFF';
        DMS.style.color = '#626262';
        this.props.getOMSDMS('OMS')
    }

    getDMS(){
        let DMS = document.getElementById("DMS");
        DMS.style.background = '#ED462F';
        DMS.style.color = '#FFFFFF';
        OMS.style.background ='#FFFFFF';
        OMS.style.color = '#626262';
        this.props.getOMSDMS('DMS')
    }

    render(){
        if(this.props.OMSDMS == 'ОМС'){
            let OMS = document.getElementById('OMS');
            OMS.style.background = '#ED462F';
            OMS.style.color = '#FFFFFF';
            DMS.style.background ='#FFFFFF';
            DMS.style.color = '#626262';
        }
        if(this.props.OMSDMS == 'ДМС'){
            let DMS = document.getElementById("DMS");
            DMS.style.background = '#ED462F';
            DMS.style.color = '#FFFFFF';
            OMS.style.background ='#FFFFFF';
            OMS.style.color = '#626262';
        }
        return(
            <div className='Type_of_insurance' id='type' omsdms = {this.props.OMSDMS}>

                        <a className='OMS' onClick={this.getOMS} id='OMS'>ОМС</a>
                        <a className='DMS' onClick={this.getDMS} id='DMS'>ДМС</a>
                    </div>
        );
    }
}
    
export default Type_of_insurance;