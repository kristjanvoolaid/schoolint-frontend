import React, { Component } from "react";

const StudentCard = ({ name, score, email, active }) => {
    return (
        <div className='bg-light-green dib'>
            <h2>{name}</h2>
            <h2>{score}</h2>
            <h2>{email}</h2>
            <h2>{active}</h2>
        </div>
    )
}

export default StudentCard;