import axios from 'axios';
const vendiaApiKey = process.env.REACT_APP_VENDIA_API_KEY;

export type Person = {
    id: number
    firstName: string
    lastName: string
    birthDate: string
    dlNumber: string
    passportNumber: string
    passportExpDate: string
    dmvPhotoURL: string
    passportPhotoURL: string
}

export const submitForm = async (ssn: number) => {
    const response = await axios.post('https://cllk1rtabd.execute-api.us-west-1.amazonaws.com/graphql/', {
        query: `query GetPersonById {
            list_PersonItems (
                filter: {
                    ssn: {
                        eq: ${ssn}
                    }
                }
            ){
                _PersonItems {
                    _id
                    ssn
                    firstName
                    lastName
                    dmvPhotoURL
                    passportPhotoURL
                    dlNumber
                    birthDate
                    passportExpDate
                }
            }
        }`
    }, {headers: {
            'Authorization': vendiaApiKey
        }})
    if (response.data.data.list_PersonItems._PersonItems) {
        console.log(response.data.data)
        let person: Person = response.data.data.list_PersonItems._PersonItems[0]
        console.log(person)
        return person;
    } else {
        return undefined
    }
}
