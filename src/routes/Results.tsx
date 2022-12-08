import React from 'react';
import {Person} from "../libs/vendia";
import './results.css';
//not sure if we will use this component, for organization purposes perhaps

export function Results(props: {person: Person}) {
    return (
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column"}}>
            <div style = {{position: "relative", height: "0%", left: 150}}>DMV Photo</div>
            <div style = {{position: "relative", height: "10%", left: 460}}>Passport Photo</div>
            <div style={{position: "relative", height: "50%", display: "flex", flexDirection: "row" }}>
                <img className="DMVPhoto" style={{height: "90%", width: 250}} src={props.person.dmvPhotoURL}
                     alt={""}/>
                <img className="PassportPhoto" style={{height: "90%", width: 250}} src={props.person.passportPhotoURL}
                     alt={""}/>
            </div>
            <div className = "background" style={{position: "relative", height: 200, width: 650, display: "flex"}}>
                <div className = "Text" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column"}}>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>First Name: {props.person.firstName}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>Last Name: {props.person.lastName}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>ID: {props.person.id}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>Birth Date: {props.person.birthDate}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>Driver's License Number: {props.person.dlNumber}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>Passport Number: {props.person.passportNumber}</div>
                    <div style = {{position: "relative", height: "30%", textAlign: "center", left: 200}}>Passport Expiration Date: {props.person.passportExpDate}</div>
                </div>
            </div>
        </div>
    );
}

