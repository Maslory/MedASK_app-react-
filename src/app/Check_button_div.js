import React from 'react';
import '../style/style.sass';


class Check_button_div extends React.Component {
    constructor(props){
        super(props);
        this.sendData = this.sendData.bind(this);
        this.outButton = this.outButton.bind(this)
        this.props.selected_service_array
        this.checked = 0
        this.props.Check_button
    }

sendData(){
    this.props.getData()
    if(this.props.selected_service_array.length >= 1 && this.props.button==3){
        this.props.newRequest()
    }
    // this.props.selected_service_array.forEach((elem, i)=> {
    //     if(elem.payment){

    //     }
    //     else{

    //     }
    //     console.log(elem.payment)
    // })
}



outButton(){
    console.log(this.props.Check_button)
    if(this.props.selected_service_array.length >= 1 && this.props.Check_button == 1){
        return <a className='Check_button_active' onClick={this.sendData}>Проверить</a>
        
    }
    else if(this.props.selected_service_array.length >= 1 && this.props.Check_button == 2){
        return <a className='Check_button_new' onClick={this.sendData}>Новый запрос</a>
        
    }
    else {
        return <a className='Check_button' >Проверить</a>
        
    }
}


    render(){
        
        return(
            <div className='Check_button_div'>
                {this.outButton()}
            </div>
            
        );
    }
}

export default Check_button_div;