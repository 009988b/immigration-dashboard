import React, {useState} from "react";
import {Button, Input} from "@mui/material";
import "./home.css";
import {signIn} from "../libs/cognito";
import {CognitoUserSession} from "amazon-cognito-identity-js";
import {Person} from "../libs/vendia";

function Results(props: {person: Person}) {
    return (
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", width: "100%"}}>
            <div style={{ position: "relative", height: "50%", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "20%" }}>
                    <div>{props.person.id}</div>
                    <div>{props.person.firstName}</div>
                    <div>{props.person.lastName}</div>
                    <div>{props.person.birthDate}</div>
                    <div>{props.person.dlNumber}</div>
                    <div>{props.person.passportNumber}</div>
                    <div>{props.person.passportExpDate}</div>
                </div>
            </div>
            <div style={{ position: "relative", height: "50%", display: "flex", flexDirection: "row" }}>
                <div style={{ position: "relative", height: "100%", width: "50%" }}>
                    <img className="DMVPhoto" style={{height: "50%", width: "50%"}}
                        src={props.person.dmvPhotoURL} alt={""}/>
                    <img className="PassportPhoto" style={{height: "50%", width: "50%"}}
                         src={props.person.passportPhotoURL} alt={""}/>
                </div>
            </div>
        </div>
    )
}


const Home = (props: {}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    //Using a simple status parameter to show the login form screen
    const [status, setStatus] = useState('initial');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Once we're logged in we will store the ssn here to search
    const [ssn, setSSN] = useState('');

    const [cognitoUserSession, setCognitoUserSession] = useState<CognitoUserSession | undefined>(undefined);
    //Once the search results return from the promise, we can display them
    const [searchResults, setSearchResults] = useState<Person | undefined>(undefined);
    /**/
    return (
        <div style={{height: "100%", width: "100%", position: "absolute", fontFamily: "Roboto", fontSize: 14}}>
            <div style={{height: "100%", width: "100%", flex: 1, flexDirection: "column", backgroundColor: "#F6F6F6", alignItems: "center"}}>
                <div style={{position: "relative", height: "15%", }}>
                    <img className="CbpLogo" src={process.env.PUBLIC_URL + "US-CBP Logo.png"} alt="image" />
                    <div style={{textAlign: "center", fontWeight: "semibold", fontSize: "22px", color: "#00416A"}}>TravelX Dashboard</div>
                </div>
                {!loggedIn && (
                    <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                        <div style={{marginLeft: "40%", marginTop: "24px", marginBottom: "12px", backgroundColor: "#FEF7ED", padding: "6px", width: "20%", color: "#555555", borderRadius: "12px", borderStyle: "solid", borderColor: "#F09511", borderWidth: 2}}>Not signed in</div>
                    </div>
                )}
                {cognitoUserSession && (
                    <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                        <div style={{marginLeft: "40%", marginTop: "24px", marginBottom: "12px", backgroundColor: "#ECF5EC", padding: "6px", width: "20%", color: "#555555", borderRadius: "12px", borderStyle: "solid", borderColor: "#008000", borderWidth: 2}}>Signed in as {cognitoUserSession.getAccessToken().payload.username}</div>
                    </div>
                )}
                <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginTop: 4}}/>
                <div style={{position: "relative", height: "50%", backgroundColor: "rgb(248,250,252)", textAlign: 'left', display: "flex", flexDirection: "column", alignItems: "center"}}>
                    {(status == 'initial') && (
                        <Button className = "LoginBtn" onClick={() => setStatus('logging-in')}>Login</Button>
                    )}
                    {(status == 'logging-in' && !loggedIn) && (
                        <div style={{position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Button className = "LoginBtn" onClick={() => setStatus('initial')}>Back to Home</Button>
                            <Input className ="Textbox" type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                            <Input className ="Textbox" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
                            <Button className = "LoginBtn" onClick={() => signIn(username,password).then((value: any) => {if (value) {setCognitoUserSession(value);setLoggedIn(true)}; console.log(value)})}>Sign in</Button>
                        </div>
                    )}
                    {(loggedIn && !searchResults) && (
                        <div style={{position: "relative", height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Button className = "LoginBtn" onClick={() => {/*TODO: ADD SIGN OUT FUNCITONALITY*/}}>Sign Out</Button>
                            <Input className ="Textbox" type="password" placeholder="Enter SSN" onChange={(event) => setSSN(event.target.value)}/>
                            <Button className = "SearchBtn" onClick={() => {/*TODO: ADD SEARCH FUNCITONALITY*/}}>Search</Button>
                        </div>
                    )}
                    {(loggedIn && searchResults) && (
                        <Results person={searchResults}/>
                    )}

                </div>
                <div style={{position: "relative", height: 0.5, backgroundColor: "rgb(100,116,139)", marginBottom: 2}}/>
                <div style={{position: "relative", height: "35%", width: "100%", display: "flex", flexDirection: "row"}}>
                    <div style={{width:"65%", marginTop: "32px", marginInline: "32px"}}>
                        The CBP Strategy 2020-2025 is focused on twelve strategic initiatives that will advance CBP's ability to accomplish our mission. To reach our goals and better accomplish our daily tasks, CBP must improve existing capabilities, develop new ones for the changing operational environment, and adapt our processes to better organize, train, equip and sustain our frontline operators.
                    </div>
                    <img src={process.env.PUBLIC_URL + "NTAS Bulletin.png"} alt="image" style={{position:"relative"}} />
                </div>
            </div>
        </div>
    );
}

export default Home;
