import React from 'react';
import '../style/style.sass';
import logo_pay from '../icons/logo_pay.svg';
import logo_free from '../icons/logo_free.svg';
import logo_absent from '../icons/logo_absent.svg';
import logo_close from '../icons/logo_close.svg';

// let data_KP = [
//     {sp:"1234 12345678",ts:'DMS',data:'14.08.2020',sc:'СК МЕД-АСКЕР',tel:'8(495)123-45-67'},
//     {sp:"9876 543210",ts:'ОМС',data:'14.08.2020',sc:'СК МЕД-АСКЕР',tel:'8(495)123-45-67'},
//     {sp:"1234 12345678",ts:'DMS',data:'15.08.2021',sc:'СК Рандеву',tel:'8(499)123-45-68'},
//     {sp:"1234-123456-78",ts:'ОМС',data:'14.08.2020',sc:'СК Рандеву',tel:'8(499)123-45-68'},
//     {sp:"12-341234-5678",ts:'DMS',data:'14.08.2020',sc:'Страх-трах',tel:'8(812)123-45-69'},
//     {sp:"9876-543210",ts:'ОМС',data:'14.08.2020',sc:'Страх-трах',tel:'8(812)123-45-69'}
// ];

let service = [
    {service_search:'Первичный приём врача-стоматолога терапевта',payment: true},
    {service_search:'Полирование челюсти',payment:true},
    {service_search:'Снятие камней с 1 зуба',payment: true},
    {service_search:'Рентген верхней и нижней челюстей',payment:true},
    {service_search:'МРТ грудной клетки',payment:true},
    {service_search:'МРТ челюсти',payment:false},
    {service_search:'Рентген грудной клетки',payment:false},
    {service_search:'Исследование функции внешнего дыхания',payment:false},
    {service_search:'Денситометрия',payment: false},
    {service_search:'МРТ головного мозга',payment:false}
];

let addElemLi = [];
let yq = [
    {item: 'Первичный приём врача-стоматолога терапевта'}
];
let output_selected_service = [];

class Medical_service extends React.Component {
    constructor(props){
        super(props);
        this.searchChange = this.searchChange.bind(this);
        this.select_service = this.select_service.bind(this);
        this.close_line = this.close_line.bind(this);
        this.sendArraySelect = this.sendArraySelect.bind(this)
        this.checkPayment = this.checkPayment.bind(this)
        this.props.PoliceSK
        this.DataKP = this.props.DataKP
        this.MedService = this.props.MedService
        this.props.Check_button
    }
    

    sendArraySelect(arr){
        this.props.getArraySelect(arr)
    }

    searchChange(){
        addElemLi = [];
        let search_block = document.getElementById('search_block');
        let input_search = document.getElementById('input_search');
        let filterText = input_search.value; 
        this.MedService.forEach(med => {
            if(med.service_search.indexOf(filterText) === -1) {
                this.forceUpdate()
                return;
            }   
            if(filterText == 0){
                addElemLi = [];
                search_block.style.border = '0px solid #868686';
                 search_block.style.borderRadius = '0px';
                 input_search.style.border = '1px solid #868686';
                 input_search.style.borderRadius = '15px';
                 this.forceUpdate()
                return;
            }
            for(let i=0; i <= output_selected_service.length - 1; i++){
                if(med.service_search == output_selected_service[i].item ){
                    return;
                }
            }
            addElemLi.push({medS: med.service_search, medP: med.payment});
            if(addElemLi.length > 0) {
                input_search.style.border = '0px solid #66D1C6';
                input_search.style.borderRadius = '0px';
                search_block.style.border = '1px solid #66D1C6';
                 search_block.style.borderRadius = '15px';
            }
            this.forceUpdate()
        });
    }
 
    select_service(event) {
        let t = event.target;
        let this_li = t.closest('LI');
        let li_payment_attribute = this_li.getAttribute('medpa');
        let li_item = this_li.innerHTML;
        let input_search = document.getElementById('input_search');
        output_selected_service.push({item: li_item, payment: li_payment_attribute})
        input_search.value = '';
        addElemLi = [];
        this.forceUpdate()
        this.sendArraySelect(output_selected_service)
    }

    close_line(event){
        let t = event.target;
        let this_li = t.closest('LI');
        for(let i=0; i <= output_selected_service.length - 1; i++){
            if(output_selected_service[i].item == this_li.innerText){
                output_selected_service.splice(i, 1);
                this.forceUpdate()
            }
        }
        this.sendArraySelect(output_selected_service)
        }
    
    
    componentDidMount(){
        let input_search = document.getElementById('input_search')
        input_search.disabled = true;
    }

    componentDidUpdate(){
        if(this.props.PoliceSK != 'Введите страховую компанию'){
            let input_search = document.getElementById('input_search')
        input_search.disabled = false; // Меняется активность imput
        }
        if(this.props.Check_button == 2){
            input_search.disabled = true;
            search_block.style.border = '1px solid #868686';
        }
        
    }

    checkPayment(){
        if(this.props.Check_button == 1){
            return(
                output_selected_service.map((service, key) =>  <li key={key}><img src={logo_absent}/>{service.item}<a onClick={this.close_line} ><img src={logo_close}/></a></li>) 
                );
            
        } else if(this.props.Check_button == 2){
            return(
                output_selected_service.map((service, key, ) =>  <li key={key}><img src={ service.payment == 'true' ? logo_pay : logo_free}/>{service.item}<a onClick={this.close_line} ><img src={logo_close}/></a></li>) 
            );
        }
        else if(this.props.Check_button == 0){
            return(
            output_selected_service.map((service, key) =>  <li key={key}><img src={logo_absent}/>{service.item}<a onClick={this.close_line} ><img src={logo_close}/></a></li>) 
            );
        }
        else if(this.props.Check_button == 3){
            addElemLi = []
            output_selected_service = []
        }
    }

    render(){
        return(
            <div className='Medical_service'>
            <section>Выберите медицинские услуги </section>
            <div className='search_service' >
            <div id='search_block'>
            <div id='layer_3'><input placeholder='Введите запрашиваемую услугу для пациента' onChange={this.searchChange} autoComplete='off'  required id='input_search'></input>
            <ul  aria-label="submenu" id='selectBlock' onClick={this.select_service}>          
                    {addElemLi.map((item, key) => <li key={key} medpa={item.medP.toString()}>{item.medS}</li>) }
                </ul></div>
                <div id='selected_service' >
                {this.checkPayment()}
            </div>
            </div>
            
           </div>
        </div>
        );
    }
}

export default Medical_service;