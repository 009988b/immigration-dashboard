import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserPool,
    CognitoUserSession
} from 'amazon-cognito-identity-js'

const userPoolId = process.env.REACT_APP_USERPOOL_ID;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

const userPool: CognitoUserPool = new CognitoUserPool({
    UserPoolId: `${userPoolId}`,
    ClientId: `${clientId}`,
});

export function getCurrentUser() {
    return userPool.getCurrentUser();
}

let user: any = getCurrentUser();

export async function getSession() {
    if (!user) {
        user = userPool.getCurrentUser()
    } else {
        return new Promise(function (resolve, reject) {
            user.getSession(function (e: any, session: any) {
                if (e) {
                    reject(e)
                } else {
                    resolve(session)
                }
            })
        }).catch((e) => {
            throw e
        })
    }
}

function getCognitoUser(username: string) {
    const userData = {
        Username: username,
        Pool: userPool,
    }
    const cognitoUser = new CognitoUser(userData)

    return cognitoUser
}

export async function signIn(username: string, password: string) {
    return new Promise(function (resolve, reject) {
        const authenticationData = {
            Username: username,
            Password: password,
        }
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        user = getCognitoUser(username);
        user.authenticateUser(authenticationDetails, {
            onSuccess: function (res: CognitoUserSession) {
                //Successful sign in, return result
                resolve(res);
            },
            onFailure: function (e: any) {
                reject(e);
            },
            newPasswordRequired: (userAttributes: any, requiredAttributes: any) => {
                user.completeNewPasswordChallenge(password,{email: 'testemail@test.net'}, {
                    onSuccess: (res: CognitoUserSession) => {
                        //Signed in to Cognito for first time
                        //console.log(res);
                        resolve(res);
                    },
                    onFailure: (e: any) => {
                        throw e;
                    }
                    }
                )
            }
        })
    }).catch((e) => {
        throw e;
    })
}

export function signOut() {
    if (user) {
        user.signOut()
    }
}
