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
    //TODO: POST form data (just SS#) to Endpoint
    //TODO: Create graphQL Query to find Person by SS#
    //TODO: Return Promise
    var query = `query GetPersonById {
    list_PersonItems (
        filter: {
            ssn: {
                eq: ${ssn}
            }
        }
    ) {
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
    }`;

}
