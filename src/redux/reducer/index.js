let initState = {
    loginFlag: false,
    users: [
        {
            email: 'user@gmail.com',
            password: 'password'
        }
    ],
    nowUser: {
        email: 'user@gmail.com',
        password: 'password'
    },
    data: {
        clinicalStudies: [
            {
                title: 'CLINICAL STUDY #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #2',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #3',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #4',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #5',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #6',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #7',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #8',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'CLINICAL STUDY #9',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            }
        ],
        trialOrganisations: [
            {
                title: 'TRIAL ORGANISATION #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            },
            {
                title: 'TRIAL ORGANISATION #1',
                data: [
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    },
                    {
                        patientId: '123-456-789',
                        surName: 'Surname',
                        middleName: 'Middle Name',
                        gender: 'Gender',
                        givenName: 'Given Name',
                        dateOfBirth: 'DD/MM/YYYY',
                        bloodGroup: 'Blood Group',
                        diagnosis: 'Diagnosis',
                        dateOfFirstTreatment: 'DD/MM/YYYY'
                    }
                ]
            }
        ],
    }
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_CHECK': {
            var tempFlag = false;
            state.users.forEach((item) => {
                if (item.email === action.payload.email && item.password === action.payload.password) tempFlag = true;
            })
            return {
                ...state,
                loginFlag: tempFlag
            }
        }
        default: return state
    }
}

export default reducer;