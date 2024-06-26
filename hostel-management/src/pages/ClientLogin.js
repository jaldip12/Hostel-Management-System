import React, { useState } from 'react';
import Login from '../components/Login';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function ClientLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login_submit = (e) => {
        e.preventDefault();
        const login_data = {
            username: username,
            password: password
        }

        try {
            axios.post("http://localhost:8000/student/login", login_data)
                .then(response => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data.token);
                    localStorage.setItem("username", response.data.data.username);
                    window.location = "/client-dashboard";
                })
        }
        catch (error) {
            console.log("error in : ", error.response.data)
        }
    }

    return (
        <div>
            <Navbar tab1='Admin Login' tab2='Student Login' tab3='Register' link1='/admin-login' link2='/student-login' link3='student/register' />
            <div className="loginContainer">
                <Login formContainerClass='studentLogin' formHeading='Student' onSubmit={login_submit} textValue={username} passwordValue={password} onTextChange={(e) => {
                    setUsername(e.target.value)
                }} onPasswordChange={(e) => {
                    setPassword(e.target.value)
                }} forgotLink='/student-login/forgot' />
            </div>
        </div>
    );
}