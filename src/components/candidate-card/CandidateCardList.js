import React from 'react'
import CandidateCard from './CandidateCard';
import './CandidatesCard.css';

const CandidateCardList = ({ candidates }) => {
    return (
        <div className="tc">
            <div id="candidates_table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Email</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                candidates.map((candidate, i) => {
                    return (
                        <CandidateCard 
                            key={candidates[i].id}
                            name={candidates[i].firstName + " " + candidates[i].lastName}
                            score={candidates[i].score}
                            email={candidates[i].email}
                            active={candidates[i].personalId}
                        />
                    )
                })
            }
        </div>
    );
}

export default CandidateCardList;
