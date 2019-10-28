import React from 'react';
import '../style/style.sass';
// import logo_MedAsk from '../icons/Logo.svg';
// import logo_Vector from '../icons/Vector.svg';
// import logo_Strah from '../icons/light-bulb 1.svg';
import Container from './container_policy-number_and_insurance-company';
import Type_of_insurance from './Type_of_insurance';
import Medical_service from './Medical_service';
import Check_button_div from './Check_button_div';
import logo_MedAsk from '../icons/Logo.svg';
import logo_Vector from '../icons/Vector.svg';
import logo_Strah from '../icons/light-bulb 1.svg';

let registration = ['Дата окончания: 14.05.22', 'Дата окончания: 11.02.23']
const data_KP = [
    { sp: "1234 12345678", ts: 'DMS', data: '14.08.2020', sc: 'СК МЕД-АСКЕР', tel: '8(495)123-45-67' },
    { sp: "9876 543210", ts: 'ОМС', data: '14.08.2020', sc: 'СК МЕД-АСКЕР', tel: '8(495)123-45-67' },
    { sp: "1234 12345678", ts: 'DMS', data: '15.08.2021', sc: 'СК Рандеву', tel: '8(499)123-45-68' },
    { sp: "1234-123456-78", ts: 'ОМС', data: '14.08.2020', sc: 'СК Рандеву', tel: '8(499)123-45-68' },
    { sp: "12-341234-5678", ts: 'DMS', data: '14.08.2020', sc: 'Страх-трах', tel: '8(812)123-45-69' },
    { sp: "9876-543210", ts: 'ОМС', data: '14.08.2020', sc: 'Страх-трах', tel: '8(812)123-45-69' }
];

let service = [
    { service_search: 'Первичный приём врача-стоматолога терапевта', payment: true },
    { service_search: 'Полирование челюсти', payment: true },
    { service_search: 'Снятие камней с 1 зуба', payment: true },
    { service_search: 'Рентген верхней и нижней челюстей', payment: true },
    { service_search: 'МРТ грудной клетки', payment: true },
    { service_search: 'МРТ челюсти', payment: false },
    { service_search: 'Рентген грудной клетки', payment: false },
    { service_search: 'Исследование функции внешнего дыхания', payment: false },
    { service_search: 'Денситометрия', payment: false },
    { service_search: 'МРТ головного мозга', payment: false }
];

let check = [];
let text = true;
let visible = true;

class App extends React.Component {
    constructor(props) {
        super(props)
        this.getData = this.getData.bind(this);
        this.getPolicy = this.getPolicy.bind(this);
        this.sendSK = this.sendSK.bind(this);
        this.getOMSDMS = this.getOMSDMS.bind(this);
        this.getPolicySK = this.getPolicySK.bind(this);
        this.getArraySelect = this.getArraySelect.bind(this);
        this.newRequest = this.newRequest.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
        this.state = {
            policeSK: 'Введите страховую компанию',
            OMSDMS: 'OMS',
            date_reg: '',
            phone_number: '',
            selected_service_array: [],
            button: 0
        }
    }


    componentDidUpdate(){
        
    }
    newRequest(){
        this.setState((state) => {
            return {
            policeSK: 'Введите страховую компанию',
            policy_number: 0,
            OMSDMS: 'OMS',
            date_reg: '',
            phone_number: '',
            selected_service_array: [],
            button: 0   // 0 - кнопка не активна, поля доступны   1 - кнопка загорается, доступно поля доступны  2 - новый запрос, поля недоступны переходит в 1
            }
        })
        
    }

    getArraySelect(arr=[]){
        if(arr.length >= 1){
            this.setState((state) => {
                return {
                    selected_service_array: arr,
                    button: 1
                }
            })
        }
        else{
            this.setState((state) => {
                return {
                    selected_service_array: arr
                }
            })
        }
    }

    getPolicy(policy_number_input = '') {
        this.setState((state) => {
            return {
                policy_number: policy_number_input
            }
        })
        if (policy_number_input.length == 12 || policy_number_input.length == 13) {
            if (policy_number_input[0] == '1' && policy_number_input.indexOf('-') == -1 && policy_number_input[4] == ' ') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ДМС',
                        policeSK: <span><img src={logo_MedAsk} />СК МЕД-АСКЕР </span>,
                        phone_number: 'Телефон:  8 (495) 123-45-67'
                    }
                })
            }
        }
       else if (policy_number_input.length == 11) {
            if (policy_number_input[0] == '9' && policy_number_input.indexOf('-') == -1 && policy_number_input[4] == ' ') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ОМС',
                        policeSK: <span><img src={logo_MedAsk} />СК МЕД-АСКЕР </span>,
                        phone_number: 'Телефон:  8 (495) 123-45-67'
                    }
                })
            }
        }
        else if (policy_number_input.length == 13) {
            if (policy_number_input[2] == '-' && policy_number_input[0] == '9' && policy_number_input[5] == ' ' && policy_number_input[10] == '-') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ОМС',
                        policeSK: <span><img src={logo_Vector} />СК Рандеву </span>,
                        phone_number: 'Телефон:  8 (490) 233-75-23'
                    }
                })
            }
        }
        else if (policy_number_input.length == 14) {
            if (policy_number_input[4] == '-' && policy_number_input[0] == '1' && policy_number_input[11] == '-') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ДМС',
                        policeSK: <span><img src={logo_Vector} />СК Рандеву </span>,
                        phone_number: 'Телефон:  8 (490) 233-75-23'
                    }
                })
            }
        }
       else if (policy_number_input.length == 14) {
            if (policy_number_input[2] == '-' && policy_number_input[0] == '1' && policy_number_input[9] == '-') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ДМС',
                        policeSK: <span><img src={logo_Strah} />Страх-трах</span>,
                        phone_number: 'Телефон:  8 (491) 741-971-24'
                    }
                })
            }
        }
        else if (policy_number_input.length == 11) {
            if (policy_number_input[4] == '-' && policy_number_input[0] == '9') {
                text = true
                this.setState((state) => {
                    return {
                        OMSDMS: 'ОМС',
                        policeSK: <span><img src={logo_Strah} />Страх-трах</span>,
                        phone_number: 'Телефон:  8 (491) 741-971-24'
                    }
                })
            } 
        }
        else{
            text = false
        }
    }

    sendSK(text) {
        return (text);
    }

    getData() {
        if(this.state.button == 3){
            this.setState((state) => {
                return {
                    button: 0
                }
            })
        }
        else if(this.state.button == 0){
            this.setState((state) => {
                return {
                    button: 1
                }
            })
        }
        else if(this.state.button == 1){
            if(this.state.policeSK == 'Введите страховую компанию' || text == false ){ //ПРИМЕР НЕВЕРНО ВВЕДЕНЫХ ДАННЫХ
                alert("неверно ввели данные, попробуйте ещё раз")
                visible = false
            }
            this.setState((state) => {
                return {
                    button: 2
                }
            })
        }
        else if(this.state.button == 2){
            this.setState((state) => {
                return {
                    button: 3
                }
            })
        }  
    }

    getPolicySK(SK) {
        this.setState((state) => {
            return { policeSK: SK }
        })
    }

    getOMSDMS(e) {
        this.setState((state) => {
            return { OMSDMS: e }
        })
    }

    changeStyle(){
        visible=true
        this.newRequest()
    }

   
    render() {
        return (
            <div className='Window'>
                {   
                    visible ? 
                        <span>
                    <section className='title'><p>Проверка услуг медицинского страхования</p></section>
                    <Type_of_insurance getOMSDMS={this.getOMSDMS} OMSDMS={this.state.OMSDMS} />
                    <Container getPolicyNumber={this.getPolicy} Policy_number={this.state.policy_number} getSK={this.getPolicySK} PoliceSK={this.state.policeSK} DateReg={this.state.date_reg} Phone={this.state.phone_number} />
                    <Medical_service PoliceSK={this.state.policeSK}  MedService={service} DataKP={data_KP} getArraySelect={this.getArraySelect} Check_button={this.state.button} />
                    <Check_button_div getData={this.getData} selected_service_array={this.state.selected_service_array} newRequest={this.newRequest} Check_button={this.state.button} />
                        </span>
                    :
                    <div id='dialog_window'>
                        <div id='dialog_box'>
                            <span>Полис с таким <br/> номером не обнаружен</span>
                            <div>Попробуйте изменить данные</div>
                            <a className='Check_button' onClick={this.changeStyle}>Ок</a>
                        </div>
                    </div> 
                }
            </div>
        );
    }
}



export default App;