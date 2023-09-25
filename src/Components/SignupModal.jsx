import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSignupModal } from '../reducers/signupModalStatusReducer';
import { openLoginModal } from '../reducers/loginModalStatusReducer';
import ModalDialog from "react-basic-modal-dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import '../ExtraCSS/custom.css';

function SignupModal() {
    const signupModalStatus = useSelector((state) => state.signupModalStatus);
    const dispatch = useDispatch();
    function openingLoginModal(){
        dispatch(closeSignupModal());
        dispatch(openLoginModal());
    }

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
                    <div className="border border-red-800 flex items-center" style={{width:'100%', height:'20%'}}>
                        Email
                    </div>
                    <div className="border border-red-800 flex items-center" style={{width:'100%', height:'15%'}}>
                        Username
                    </div>
                    <div className="border border-red-800 flex items-center" style={{width:'100%', height:'25%'}}>
                        Create Password
                    </div>
                    <div className="border border-red-800 flex items-center justify-center" style={{width:'100%', height:'15%'}}>
                        Confirm Password
                    </div>
                    <div className="border border-red-800 flex items-center justify-center" style={{width:'100%', height:'10%'}}>
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