import React from "react";
import './CandidatesCard.css';

const CandidateCard = ({ name, score, email, active }) => {
    return (
        <div className='tc'>
            <div id="candidates_table">
                <table className="tc" id="candidates_row">
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{score}</td>
                            <td>{email}</td>
                            <td>{active}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CandidateCard;