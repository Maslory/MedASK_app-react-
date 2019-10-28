import React from 'react';
import '../style/style.sass';
import logo_MedAsk from '../icons/Logo.svg';
import logo_Vector from '../icons/Vector.svg';
import logo_Strah from '../icons/light-bulb 1.svg';
import { throws } from 'assert';



class Container extends React.Component {
    constructor(props) {
        super(props)
        this.sendPolicyNumber = this.sendPolicyNumber.bind(this);
        this.clickLi = this.clickLi.bind(this);
        this.clickSelectbox = this.clickSelectbox.bind(this);
        this.change_click_li = this.change_click_li.bind(this);
        this.props.PoliceSK
        this.props.DateReg
        this.props.Phone
        this.props.Policy_number
    }

    

    sendPolicyNumber() {
        let policy_number = document.getElementById('policy_number')
        if (policy_number.value.length > 7) {
            this.props.getPolicyNumber(policy_number.value)
        }
    }

    clickSelectbox(event) {
        let selectbox = document.getElementById("selectbox");
        let click_li = document.getElementById('click_li');
        let click_a = document.getElementById('click_a');
        let ul_border = document.getElementById('ul_border');
        let t = event.target;
        let this_li = t.closest('LI');
        if (this_li.innerHTML.length > 1500) {

        }
        else {
           this.change_click_li(this_li)
           click_a.innerHTML = this_li.innerHTML + '';
           for (let i = 0; i < selectbox.children.length; i++) {
            selectbox.children[i].style.display = 'none';
            selectbox.children[i].style.opacity = '0';
            selectbox.children[i].visibility = 'hidden';
        }
        }
        let divAp = document.getElementById('divAp')
        if(this_li.textContent == "СК Рандеву"){
            this.props.getSK(<span><img src={logo_Vector} />СК Рандеву </span>)
        }
        else if(this_li.textContent == 'Страх-трах'){
            this.props.getSK(<span><img src={logo_Strah} />Страх-трах</span>)
        }
        else if(this_li.textContent == " СК МЕД-АСКЕР"){
            this.props.getSK(<span><img src={logo_MedAsk} />СК МЕД-АСКЕР</span>)
        }
        event.stopPropagation()
    }


    change_click_li(targ=0){
        let click_li = document.getElementById('click_li');
        let click_a = document.getElementById('click_a');
        let ul_border = document.getElementById('ul_border');
        click_li.style.paddingLeft = '15%';
        click_a.style.color = '#000000';
        ul_border.style.border = '0px solid #66D1C6';
        ul_border.style.borderRadius = '0px';
        click_li.style.border = '1px solid #868686';
        click_li.style.borderRadius = '50px';
        
    }

    clickLi() {
        let selectbox = document.getElementById("selectbox");
        let click_li = document.getElementById('click_li');
        let ul_border = document.getElementById('ul_border');
        selectbox.style.display = 'block';
        selectbox.style.opacity = '1';
        selectbox.style.visibility = 'visible';
        ul_border.style.border = '1px solid #66D1C6';
        ul_border.style.borderRadius = '15px';
        click_li.style.border = '0';
        click_li.style.borderRadius = '0px';
        for (let i = 0; i < selectbox.children.length; i++) {
            selectbox.children[i].style.display = 'block';
            selectbox.children[i].style.opacity = '1';
            selectbox.children[i].style.visibility = 'visible';
        }
    }

    componentDidUpdate(){
        let PoliceSK = this.props.PoliceSK
        if(PoliceSK != 'Введите страховую компанию'){
            this.change_click_li(PoliceSK)
        }
        
    }

  

    render() {
        let PoliceSK = this.props.PoliceSK
        return (
            <div className='container_policy-number_and_insurance-company'>
                <div className='Police_number_col-1'><input id='policy_number' type='text' onChange={this.sendPolicyNumber} required placeholder="Введите номер полиса" ></input></div>
                <div className='Insurance_company_col-2'>
                    <nav role="navigation">
                        <ul className='ul_border' id='ul_border'>
                            <li id='click_li' onClick={this.clickLi} ><a href="#" aria-haspopup="true" id='click_a'>{PoliceSK}</a>
                                <ul className="dropdown" aria-label="submenu" id='selectbox' onClick={this.clickSelectbox} >
                                    <br />
                                    <li value='0' className='light' > <img src={logo_MedAsk} />СК МЕД-АСКЕР</li>
                                    <li value='0' className='light'><img src={logo_Vector} />СК Рандеву</li>
                                    <li value='0' className='light' ><img src={logo_Strah} />Страх-трах</li>
                                </ul>
                            </li>

                        </ul>
                    </nav>
                </div>
                <span id='date_policy'>{this.props.DateReg}</span>
        <span id='numberPhone_SK'>{this.props.Phone}</span>
            </div>
        );
    }
}




export default Container;