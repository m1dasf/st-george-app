import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import { setClassId } from '../redux/actions/index';
import axios from 'axios';

function MenuPage() {
  const nowUser = useSelector(state => state.nowUser);
  const baseUrl = useSelector(state => state.baseUrl);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const setClassID = (id) => {
    dispatch(setClassId(id));
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('stuff')
  switch (nowUser.userType) {
    case 'admin':
      return (
        <div className='MenuPage'>
          <Header />
          <div className='main'>
            <p className='title'>Create a new user</p>
            <div className='input-item'>
              <p>First Name</p>
              <div className='input-box'>
                <input type={"text"} value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
              </div>
            </div>
            <div className='input-item'>
              <p>Last Name</p>
              <div className='input-box'>
                <input type={"text"} value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
              </div>
            </div>
            <div className='input-item'>
              <p>Email</p>
              <div className='input-box'>
                <input type={"email"} value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
            </div>
            <div className='input-item'>
              <p>Password</p>
              <div className='input-box'>
                <input type={"password"} value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>
            </div>
            <div className='input-item'>
              <p>Login</p>
              <div className='input-box'>
                <select value={userType} onChange={(e) => { setUserType(e.target.value) }} >
                  <option>stuff</option>
                  <option>nurse</option>
                  <option>admin</option>
                </select>
              </div>
            </div>
            <div className='button' onClick={() => {
              if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && userType !== '') {
                const userObject = {
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  password: password,
                  userType: userType
                };
                axios.post(baseUrl + '/user/create-user', userObject)
                  .then(res => {
                    if (res.data?.success) {
                      setFirstName('')
                      setLastName('')
                      setEmail('')
                      setPassword('')
                      setUserType('stuff')
                    }
                  })
                  .catch((error) => { });
              }
            }}>CREATE A NEW USER</div>
          </div>
        </div>
      )
    case 'nurse':
      return (
        <div className='MenuPage not-admin'>
          <Header />
          <div className='main'>
            <p className='title'>Welcome, {nowUser?.firstName}</p>
            <div className='button' onClick={() => {
              setClassID(0)
              navigate('/clinical-studies')
            }}>ALL CLINICAL STUDIES</div>
            <div className='button' onClick={() => {
              setClassID(1)
              navigate('/trial-organisations')
            }}>ALL TRIAL ORGANIZATIONS</div>
            <div className='button' onClick={() => {
              setClassID(2)
              navigate('/all-patients-list')
            }}>QUESTIONNAIRE</div>
            <div className='button' onClick={() => {
              setClassID(3)
              navigate('/all-patients-list')
            }}>LIST OF ALL PATIENTS</div>
          </div>
        </div>
      )
    case 'stuff':
      return (
        <div className='MenuPage not-admin'>
          <Header />
          <div className='main'>
            <p className='title'>Welcome, {nowUser?.firstName}</p>
            <div className='button' onClick={() => {
              setClassID(0)
              navigate('/clinical-studies')
            }}>ALL CLINICAL STUDIES</div>
            <div className='button' onClick={() => {
              setClassID(1)
              navigate('/trial-organisations')
            }}>ALL TRIAL ORGANIZATIONS</div>
            <div className='button' onClick={() => {
              setClassID(2)
              navigate('/new-patient')
            }}>CREATE A PATIENT RECORD</div>
            <div className='button' onClick={() => {
              setClassID(3)
              navigate('/all-patients-list')
            }}>LIST OF ALL PATIENTS</div>
          </div>
        </div>
      )
    default:
      return
  }
}

export default MenuPage