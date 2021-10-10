import React, { Component } from "react";
import './CandidatesCard.css';

const CandidateCard = ({ name, score, email, active }) => {
    return (
        <div className='tc'>
            <div class="candidates_table">
                <table id="candidates_row">
                    <tr>
                        <td>{name}</td>
                        <td>{score}</td>
                        <td>{email}</td>
                        <td>{active}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CandidateCard;