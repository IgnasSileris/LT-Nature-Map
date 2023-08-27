import React from 'react';

function LoginBox() {
    return (
        <div className="flex-initial">
            <button className="border-solid border font-medium bg-white text-sky-600 hover:bg-gray-100 hover:border-blue-600 rounded-md shadow-md p-2">
            Log in</button>
        </div>
    );
}

function SignUpBox() {
    return (
        <div>
            <div className="flex-initial">
            <button className="border-solid border border-blue-600 font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md shadow-md p-2">
            Sign up</button>
        </div>
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