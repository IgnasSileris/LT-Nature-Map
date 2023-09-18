import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../reducers/loginStatusReducer';

function LoginBox() {
    return (
        <div className="flex-initial">
            <button title="Log into an existing account" className="border-solid border-2 border-slate-50 font-medium bg-slate-50 text-sky-600 hover:bg-gray-200 hover:border-blue-500 rounded-md shadow-md p-2">
            Log in</button>
        </div>
    );
}

function SignUpBox() {
    return (
            <div className="flex-initial">
            <button title="Create a new account" className="border-solid border-2 border-blue-600 font-medium bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md shadow-md p-2">
            Sign up</button>
        </div>
    );
}

function LoginSignupBar (){
    return (
        <div className="flex flex-row justify-between gap-3">
            <LoginBox/>
            <SignUpBox/>
        </div>
    )
}
export default LoginSignupBar;