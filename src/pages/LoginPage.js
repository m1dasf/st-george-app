import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoFull from '../assets/logo-full.png';


function LoginPage() {
    const loginFlag = useSelector(state => state.loginFlag);
    const baseUrl = useSelector(state => state.baseUrl);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const logiN = () => {
        axios.post(baseUrl + '/user/check-user', { email: email, password: password })
            .then(res => {
                if (res.data[0]) {
                    dispatch(login(res.data[0]));
                    setEmail("")
                    setPassword("")
                }
                else alert("Wrong Login Info...")
            })
            .catch((error) => {
                alert("Wrong Login Info...")
            })
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        if (loginFlag) navigate('/menu');
    })
    return (
        <div className='LoginPage'>
            <div className='logo'>
                <img src={LogoFull} alt="logo-full" />
            </div>
            <p className='title'>St George Hospital</p>
            <p className='sub-title'>Cancer Care Center</p>
            <div className='input-item'>
                <p>Email</p>
                <div className='input-box'>
                    <input type={"text"} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
            </div>
            <div className='input-item'>
                <p>Password</p>
                <div className='input-box'>
                    <input type={"password"} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
            </div>
            <div className='button' onClick={logiN}>LOGIN</div>
        </div>
    )
}

export default LoginPage