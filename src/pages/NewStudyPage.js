import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header'
import axios from 'axios';
import GoBackButton from '../components/GoBackButton';

function NewStudyPage() {
    const baseUrl = useSelector(state => state.baseUrl);
    const currentClassId = useSelector(state => state.currentItem.classId);
    const className = (currentClassId===0)? 'Clinical Study' : 'Trial Organisation';
    const [newStudyName, setNewStudyName] = useState('')
    const navigate = useNavigate();
    return (
        <div className='NewStudyPage'>
            <Header />
            <GoBackButton/>
            <div className='main'>
                <p className='title'>Create A New {className}</p>
                <div className='input-item'>
                    <p>{className} Name</p>
                    <div className='input-box'>
                        <input type={"text"} value={newStudyName} onChange={(e) => { setNewStudyName(e.target.value) }} />
                    </div>
                </div>
                <div className='button' onClick={() => {
                    if (newStudyName) {
                        const studyObject = {
                            className: className,
                            studyTitle: newStudyName
                        };
                        axios.post(baseUrl + '/study/create-study', studyObject)
                            .then(res => {
                                if (res.data?.success) {
                                    navigate(-1)
                                }
                            })
                            .catch((error) => { });
                    }
                }}>CREATE A NEW {className.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default NewStudyPage