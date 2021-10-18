import React from "react";
import './CandidatesCard.css';
import { Link } from "react-router-dom";

const CandidateCard = ({ id, name, score, email, active }) => {
    const candidateEndpoint = `/candidates/${id}`;
    return (
        <div className='tc'>
            <div id="candidates_table">
                <table className="tc" id="candidates_row">
                    <tbody>
                        <tr>
                            <td>
                                <Link id={id} className="f6 link dim br2 ph3 pv2 mh2 mb3 mt3 dib white bg-black" to={{
                                    pathname: candidateEndpoint,
                                    id: id
                                }
                                }>{name}</Link> 
                            </td>
                            <td>{score}</td>
                            <td>{email}</td>
                            <td>{active}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </div>
    )
}

export default CandidateCard;