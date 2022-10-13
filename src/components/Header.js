import React, { useState } from 'react'
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/index';
import { Navigate, useNavigate } from 'react-router-dom';
import LogoFull from '../assets/logo-full.png';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nowUser = useSelector(state => state.nowUser);
    const [userHover, setUserHover] = useState(false)
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={LogoFull} alt="logo" width="47" height="47" onClick={() => navigate('/menu')} />
            </div>
            <p className='center'>St George Hospital Cancer Care Center</p>
            <div className='right'  onClick={() => setUserHover(true)} onMouseLeave={() => setUserHover(false)}>
                <p>{nowUser?.firstName} {nowUser?.lastName}</p>
                <UserIcon/>
                <div className={userHover ? 'dropdown-menu' : 'hidden'}>
                    <p>{nowUser?.firstName} {nowUser?.lastName}</p>
                    <p>User Type : {nowUser?.userType}</p>
                    <div className='horizontal-line'></div>
                    <p className='hover-pointer' onClick={() => {
                        dispatch(logout());
                        navigate('/login')
                    }}>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default Header