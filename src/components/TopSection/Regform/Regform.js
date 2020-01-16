import React, { Component } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import logo from '../Header/logo.svg'

export default class Regform extends Component {
    constructor(props) {
        super(props);
        this.inputs = ['first_name', 'last_name', 'email']
    }

    updateValue(value, key, callback) {
        let obj = {},
            tempForm = this.props.syncState.form
        obj[key] = value
        Object.assign(tempForm, obj)

        new Promise((resolve, reject) => resolve(this.props.syncForms(tempForm))).then(callback)
    }

    handleForward() {
        let validate = this.props.validateParams(this.props.syncState.form)

        if (validate.success)
            this.props.setLeadData(this.props.syncState.form)
                .then(this.props.handleStep(this.props.syncState.step + 1))
                .then(() => { if (this.props.syncState.step === 2) this.props.handleLeadStep() })
                .then(() => this.props.syncErrors({password: {empty: true}}))
        else this.props.syncErrors(validate.errors)
    }

    handleSubmit() {
        let validate = this.props.validateParams(this.props.syncState.form)
        if (validate.success)
            this.props.setLeadData(this.props.syncState.form)
                // .then(this.setState({loading: true}))
                .then(this.props.handleStep(this.props.syncState.step + 1))
                .then(this.props.handleSubmit)
                .then(res => (res.redirectUrl) ? window.location = res.redirectUrl : this.props.syncErrors({responseError: res.error}))
        else this.setState({errors: validate.errors})
    }


    render() {
        let languageManager = this.props.languageManager();

        if (this.props.syncState.step <=2) {
            return (
                <div className="Regform">
                    <div className='inner'>
                        <div className="heading">
                            <span>{languageManager.regform_title[0]}</span>
                            <strong>{languageManager.regform_title[1]}</strong>
                        </div>
                        {(this.props.syncState.step === 1) ?
                        <div className='form-wrapper one'>

                            {this.inputs.map((input,index)=>{
                                    return(
                                        <div className="form-group" key={index}>
                                            <input
                                                className={'form-control ' + input}
                                                type="text" name={input}
                                                placeholder={languageManager[input]}
                                                value={this.props.syncState.form[input]}
                                                onChange={(e) => this.updateValue(e.target.value, input)}/>

                                                {((this.props.syncState.errors[input] && this.props.syncState.errors[input].messages)) ?
                                                <div className={(this.props.syncState.errors[input].messages) ? 'error active' : 'error'}>
                                                    <span>{this.props.syncState.errors[input].messages[0]}</span>
                                                </div> : ''}
                                        </div>
                                    )
                                })}
                            <div className="form-group">
                                <button onClick={this.handleForward.bind(this)} className="registerBtn">
                                    <span>{languageManager.button}</span>
                                </button>
                            </div>
                        </div>
                        : <div className='form-wrapper two'>
                                {
                                    this.inputs.map((input,index)=>{
                                        return(
                                            <div className="form-group" key={index}>
                                                <input
                                                    className={'form-control ' + input}
                                                    type="text" name={input}
                                                    placeholder={languageManager[input]}
                                                    value={this.props.syncState.form[input]}
                                                    onChange={(e) => this.updateValue(e.target.value, input)}/>

                                                {((this.props.syncState.errors[input] && this.props.syncState.errors[input].messages)) ?
                                                    <div className={(this.props.syncState.errors[input].messages) ? 'error active' : 'error'}>
                                                        <span>{this.props.syncState.errors[input].messages[0]}</span>
                                                    </div> : ''}
                                            </div>
                                        )
                                    })
                                }
                            <div className="form-group">
                                <div className="row" style={{margin:0}}>
                                    <IntlTelInput
                                        preferredCountries={[this.props.countryCode]}
                                        defaultCountry={this.props.countryCode.toLowerCase()}
                                        containerClassName="intl-tel-input"
                                        inputClassName="form-control tel"
                                        autoPlaceholder={true}
                                        separateDialCode={true}
                                        value={this.props.syncState.form.phone_number}
                                        onPhoneNumberChange={(e, value) => this.updateValue( value.replace(/\D/g,''), 'phone_number')}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button onClick={this.handleSubmit.bind(this)} className='registerBtn'>
                                    <span>{languageManager.button}</span>
                                </button>
                            </div>
                        </div> }
                    </div>

                </div>
            )
        } else {
            return (
                <div className="Regform">
                    {(this.props.syncState.errors.responseError) ?
                        <div className="response-error">
                            <p>{this.props.syncState.errors.responseError}</p>
                            <button className="registerBtn" onClick={() => this.props.handleStep(1)}>Ok</button>
                        </div>
                    : <img src={logo} alt="lodaing" className="loading"/>}
                </div>
            )
        }
    }
}
