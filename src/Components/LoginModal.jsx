import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginModal } from '../reducers/loginModalStatusReducer';
import ModalDialog from "react-basic-modal-dialog";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

function LoginModal() {
    const loginModalStatus = useSelector((state) => state.loginModalStatus);
    const dispatch = useDispatch();
    const usernameInputStyle = {
        backgroundColor: 'inherit',
        border: 'none',
        borderBottom: '2px solid #000',
        borderRadius: 0
    };

    return (
        <ModalDialog isDialogVisible={loginModalStatus} closeDialog={() => dispatch(closeLoginModal())}
        dialogClassName="border border-black bg-gray-200 w-1/4 h-4/6 rounded-lg backdrop:bg-black/40"
        divClassName="flex flex-col w-full h-full justify-center items-center">     
            <div className="w-full border border-orange-500 flex items-center justify-end p-5 pb-1 pt-1">
                <button title="Close" className="font-normal text-3xl font-sans text-gray-500 hover:text-black" onClick={()=> dispatch(closeLoginModal())}> x</button>
            </div>
            <div className="flex w-full h-full p-12 pt-0">
                <div className="border border-red-700 flex flex-col w-full h-full">
                    <div className="border border-blue-700 flex items-center justify-center text-2xl font-bold" style={{width: '100%', height: '15%'}}>
                        Log into your account
                    </div>
                    <div className="border border-green-700" style={{width:'100%', height:'15%'}}> </div>
                    <div className="border border-blue-700 flex items-center bg-none" style={{width:'100%', height:'15%'}}>
                        <span className="p-float-label">
                            <InputText type="text" style={usernameInputStyle}/>
                            <label htmlFor="username">Username or email</label>
                        </span>
                    </div>
                    <div className="border border-blue-700 flex items-center" style={{width:'100%', height:'15%'}}>
                        <span className="p-float-label">
                            <Password inputId="password" toggleMask/>
                            <label htmlFor="password">Password</label>
                        </span>
                    </div>
                    <div className="border border-blue-700 flex items-center justify-center" style={{width:'100%', height:'15%'}}>
                        <button className="border-solid border bg-rose-400 hover:bg-rose-500 px-4 py-2 rounded-md">Log in</button>
                    </div>
                    <div className="border border-blue-700 flex items-center justify-center" style={{width:'100%', height:'25%'}}>
                        <span>Don't have an account? <button className="text-sky-800 hover:text-indigo-500"> Sign up.</button></span>
                    </div>

                </div>
            </div>      
        </ModalDialog>
    );
}

export default LoginModal;