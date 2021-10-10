import React from 'react'
import CandidateCard from './CandidateCard';
import './CandidatesCard.css';

const CandidateCardList = ({ candidates }) => {
    return (
        <div className="tc">
            <div class="candidates_table">
                <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Email</th>
                    <th>Active</th>
                </tr>
            </table>
            </div>
            {
                candidates.map((candidate, i) => {
                    return (
                        <CandidateCard 
                            key={i}
                            name={candidates[i].Name}
                            score={candidates[i].Score}
                            email={candidates[i].Email}
                            active={candidates[i].Active}
                        />
                    )
                })
            }
        </div>
    );
}

export default CandidateCardList;
