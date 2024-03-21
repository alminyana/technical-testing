import React, { useState } from 'react';
import './PostData.css';
import IsLoggedComponent from './IsLoggedComponent';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function PostData() {
    const [pwdValue, setPwdValue] = useState<string>('');
    const [nameValue, setNameValue] = useState<string>('');
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<boolean>(false);

    const submitForm = async ():Promise<any> => {
        const reqOptions = {
            method: 'POST',
            header: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: pwdValue, title: nameValue})
        };

        const response = await fetch(`${BASE_URL}/posts`, reqOptions);
        if (response.ok) {
            setIsLogged(true);
        } else {
            setErrorLogin(true);
        }
    }

    return (
        <div className="postContainer">
            <h3>Login page</h3>
            {!isLogged && (
                <div className="form">
                    <div className="inputField">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            autoComplete="Username"
                            value={nameValue}
                            onChange={(e)=> setNameValue(e.target.value)}
                            type="text"
                            placeholder="Enter name" />
                    </div>
                    <form className="inputField">
                        <label htmlFor="pwd">Password</label>
                        <input
                            id="pwd"
                            autoComplete='new-password'
                            value={pwdValue}
                            onChange={(e) => setPwdValue(e.target.value)}
                            type="password"
                            placeholder="Enter password" />
                    </form>
                    <div className="inputField">
                        <button type="submit" onClick={() => submitForm()}>Submit</button>
                    </div>
                </div>
            )}
            {/* {isLogged && ( */}
                <div>
                    <IsLoggedComponent name={nameValue} />
                </div>
            {/* )} */}
            {errorLogin && <div>Something went wrong</div>}
        </div>
    );
}

export default PostData;
