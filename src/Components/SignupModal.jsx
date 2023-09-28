import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSignupModal } from '../reducers/signupModalStatusReducer';
import { openLoginModal } from '../reducers/loginModalStatusReducer';
import ModalDialog from "react-basic-modal-dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import '../ExtraCSS/custom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignupModal() {
    const signupModalStatus = useSelector((state) => state.signupModalStatus);
    const dispatch = useDispatch();
    function openingLoginModal(){
        dispatch(closeSignupModal());
        dispatch(openLoginModal());
    }

    // Input value manager
    //Email
    const [emailValue, setEmailValue] = useState('');
    
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    //Username
    const [usernameValue, setUsernameValue] = useState('');
    const [usernameStatus, setUsernameStatus] = useState('Passive') //options: 'Passive' - no text, 'Invalid" - incorrect format, 'Valid' - valid and free, 'Taken' - already in use
    
    const handleUsernameChange = (e) => {
        setUsernameValue(e.target.value);
        checkUsernameValidity(e.target.value);
        handleClassChange(usernameStatus);
    }
    function isChar(cCode) {
        if (('a'.charCodeAt(0) <= cCode && cCode <= 'z'.charCodeAt(0)) || ('A'.charCodeAt(0) <= cCode && cCode <= 'Z'.charCodeAt(0))) {
            return true
        }
        else {
            return false
        }
    }
    const checkUsernameValidity = (uValue) => {
        const takenUsernames = ["Alice", "Bob", "Charlie", "David", "Eve"];
        console.log(uValue.length);
        if (uValue.length === 0){
            setUsernameStatus('Passive');
        }
        if (uValue.length >= 2 && isChar(uValue.charCodeAt(0))){
            setUsernameStatus('Valid');
            if (takenUsernames.includes(uValue)) {
                setUsernameStatus('Taken');
            }
        }
        if ((0 < uValue.length && uValue.length < 2) || ((uValue.length > 2) && (isChar(uValue.charCodeAt(0))===false))){
            setUsernameStatus('Invalid');
        }
    }
    const [usernameStyleClass, setUsernameStyleClass] = useState('custom-inputs');
    const handleClassChange = (uStatus) => {
        switch (uStatus){
            case 'Passive':
                setUsernameStyleClass('custom-inputs');
                break;

            case 'Valid':
                setUsernameStyleClass('custom-inputs-valid');
                break;

            case 'Invalid':
                setUsernameStyleClass('custom-inputs-invalid');
                break;

            case 'Taken':
                setUsernameStyleClass('custom-inputs-taken');
                break;
        }
    }


    //Password
    return (
        <ModalDialog isDialogVisible={signupModalStatus} closeDialog={() => dispatch(closeSignupModal())}
        dialogClassName="bg-gray-200 w-1/4 h-3/4 rounded-lg backdrop:bg-black/40"
        divClassName="flex flex-col w-full h-full justify-center items-center">     
            <div className="w-full flex items-center justify-end p-5 pb-1 pt-1">
                <button title="Close" className="font-normal text-3xl font-sans text-gray-500 hover:text-black" onClick={()=> dispatch(closeSignupModal())}> x</button>
            </div>
            <div className="flex w-full h-full p-12 pt-0">
                <div className="border border-red-800 flex flex-col w-full h-full">
                    <div className="border border-red-800 flex items-center justify-center text-2xl font-bold" style={{width: '100%', height: '15%'}}>
                        Create an account
                    </div>
                    <div className="border border-red-800 flex items-start" style={{width:'100%', height:'15%'}}>
                        <span className="p-float-label w-full">
                            <InputText type="text" className="custom-inputs" maxLength={25} value={emailValue} onChange={handleEmailChange}/>
                            <label htmlFor="username">Enter your email</label>
                        </span>
                    </div>
                    <div className="border border-red-800 flex items-start" style={{width:'100%', height:'15%'}}>
                        <span className="p-float-label w-full">
                            <InputText type="text" className={usernameStyleClass} maxLength={25} value={usernameValue} onChange={handleUsernameChange}/>
                            <label htmlFor="username">Choose a username</label>
                        </span>
                    </div>
                    <div className="border border-red-800 flex items-start" style={{width:'100%', height:'25%'}}>
                        <span className="p-float-label w-full">
                            <Password style={{width: '100%'}} inputClassName="custom-inputs" inputId="password" maxLength={25} toggleMask feedback={false}/>
                            <label htmlFor="password">Create a password</label>
                        </span>
                    </div>
                    <div className="border border-red-800 flex items-start" style={{width:'100%', height:'15%'}}>
                        <span className="p-float-label w-full">
                            <Password style={{width: '100%'}} inputClassName="custom-inputs" inputId="password" maxLength={25} toggleMask feedback={false}/>
                            <label htmlFor="password">Confirm your password</label>
                        </span>
                    </div>
                    <div className="border border-red-800 flex items-center justify-center" style={{width:'100%', height:'15%'}}>
                        <button className="border-solid border bg-rose-400 hover:bg-rose-500 px-4 py-2 rounded-md">Sign up</button>
                    </div>
                    <div className="border border-red-800 flex items-center justify-center" style={{width:'100%', height:'5%'}}>
                        <span>Already have an account? <button className="text-sky-800 hover:text-indigo-500"
                        onClick={openingLoginModal}> Log in.</button></span>
                    </div>
                </div>
            </div>      
        </ModalDialog>
    );
}

export default SignupModal;