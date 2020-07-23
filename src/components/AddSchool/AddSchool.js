import React, { Component } from 'react'
import { connect } from 'react-redux'

import {addSchool} from "../redux/actions/schoolActions"
import validator from 'validator';



import InputGroup from '../shared/InputGroup';
import ButtonGroup from '../shared/ButtonGroup';

import { successToast, failureToast } from '../Toastify/Toast';


export class AddSchool extends Component {
    componentDidMount(){
        console.log(this.props);
        
    }
    state = {
        mySchools:[],
        canSubmit: false,
        formSetting: {
            name: {
                iconName: 'fas fa-user',
                type: 'text',
                name: 'name',
                placeholder: 'Enter name',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            address: {
                iconName: 'fas fa-user',
                type: 'text',
                name: 'address',
                placeholder: 'Enter username',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            contact: {
                iconName: 'fas fa-at',
                type: 'text',
                name: 'contact',
                placeholder: 'Enter Contact email',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            missionStatement: {
                iconName: 'fas fa-lock',
                type: 'text',
                name: 'missionStatement',
                placeholder: 'Enter password',
                value: '',
                error: {
                    message: '',
                    noError: null,
                },
            },
            
        },
        validate: {
            nameError: {
                noError: null,
                message: '',
            },
            address: {
                noError: null,
                message: '',
            },
            contact: {
                noError: null,
                message: '',
            },
            missionStatement: {
                noError: null,
                message: '',
            },

        },
    };

    checkInputValidation = (errorState, inputName, inputValue) => {
        switch (inputName) {
            case 'name':
                let validatedName =true
                // validatedName = validator.matches(
                //     inputValue,
                //     /^[a-zA-Z0-9]{1,20}$/
                // );
                console.log(errorState);
                console.log(validatedName);
                
                if (!validatedName) {
                    
                    errorState.nameError.noError = validatedName;
                    errorState.nameError.message =
                        'cannot contain special characters and minimum of 2 and maximum of 20 characters';
                    return errorState;
                } else {
                    errorState.nameError.noError = validatedName;
                    errorState.nameError.message = '';
                    return errorState;
                }
            case 'contact':
                let validatedContact = true
                // validatedContact = validator.isEmail(inputValue);
                if (!validatedContact) {
                    errorState.contactError.noError = validatedContact;
                    errorState.contactError.message = 'It must be an email';
                    return errorState;
                } else {
                    errorState.contactError.noError = validatedContact;
                    errorState.contactError.message = '';
                    return errorState;
                }

                case "missionStatement":
                    let validatedMissionStatement = true
                    // validatedMissionStatement = validator.matches(inputValue,/^[a-zA-Z0-9]$/)
                    if(!validatedMissionStatement){
                        errorState.missionStatementError.noError = validatedMissionStatement;
                        errorState.missionStatementError.message="stop trying to cross script fool"
                        return errorState
                    } else{
                        errorState.missionStatementError.noError = validatedMissionStatement;
                        errorState.missionStatementError.message=""
                        return errorState
                    }
            
            default:
                return errorState;
        }
    };

    onChange = (event) => {
        let inputForm = {
            ...this.state.formSetting,
        };
        inputForm[event.target.name].value = event.target.value;
        let isValidatedCheck = this.checkInputValidation(
            this.state.validate,
            event.target.name,
            event.target.value
        );
        inputForm['name'].error = isValidatedCheck.nameError;
        inputForm['contact'].error = isValidatedCheck.contactError;
        inputForm['missionStatement'].error = isValidatedCheck.missionStatementError;
        this.setState({
            validate: isValidatedCheck,
        });
        console.log(inputForm['name']);
        console.log(inputForm['contact']);
        console.log(inputForm['missionStatement']);
        
        if (
            inputForm['name'].error.noError === false ||
            inputForm['contact'].error.noError === false ||
            inputForm['missionStatement'].error.noError 
        ) {
            this.setState({
                canSubmit: true,
            });
            return;
        }
        if (
            inputForm['name'].error.noError === true &&
            inputForm['contact'].error.noError === true &&
            inputForm['missionStatement'].error.noError
        ) {
            this.setState({
                canSubmit: false,
            });
            return;
        } else {
            this.setState({
                ...this.state,
                formConfig: inputForm,
            });
            return;
        }
    };

    onSubmit = async (event) => {
        event.preventDefault();
        console.log("hello");
        

        const {
            name,
            address,
            contact,
            missionStatement,
           
        } = this.state.formConfig;

        try {
            let inputForm = {
                ...this.state.formSetting,
            };

            await this.props.addSchool({
                name: name.value,
                contact: contact.value,
                missionStatement: missionStatement.value,
                address: address.value,
                
            });
            console.log("after this.props");
            

            successToast('👤Verified, please log in');

            inputForm['name'].value = '';
            inputForm['address'].value = '';
            inputForm['contact'].value = '';
            inputForm['missionStatement'].value = '';

            this.setState({
                ...this.state,
                formSetting: inputForm,
                onSubmit: false,
            });

            this.props.history.push('/');
        } catch (e) {
            failureToast(e);
        }
    };
    render() {
        const { canSubmit, formSetting } = this.state;
        let inputArray = [];
        for (let key in formSetting) {
            inputArray.push({
                formSetting: formSetting[key],
            });
        }
        return (
            <>
                <div className=''>
                    <form className='login-box' onSubmit={this.onSubmit}>
                        <h1>Add School</h1>
                        {inputArray.map((element) => {
                            const {
                                formSetting: {
                                    name,
                                    placeholder,
                                    value,
                                    error,
                                    iconName,
                                },
                            } = element;
                            return (
                                <InputGroup
                                    key={name}
                                    name={name}
                                    iconName={iconName}
                                    placeholder={placeholder}
                                    onChange={this.onChange}
                                    value={value}
                                    error={error}
                                    type={name}
                                />
                            );
                        })}
                        <ButtonGroup
                            buttonStyle='btn'
                            title='Register'
                            disabled={canSubmit}
                        />
                    </form>
                </div>
            </>
        );
    }
    }


const mapStateToProps = (state) => ({
    schools:state.mySchools
})



export default connect(mapStateToProps, {addSchool})(AddSchool)
