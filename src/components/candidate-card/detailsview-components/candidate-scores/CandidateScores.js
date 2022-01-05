import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';

function CandidateScores({ candidateCode, scoresKat1, scoresKat2, scoresKat3, scoresKat4, finalScore }) {
    const rifCategories = ['', 'Kat1', 'Kat2', 'Kat3', 'Kat4', 'Kokku'];
    const loCategories = ['', 'Liiklustest', 'Isiksustest', 'Tõlkimine', 'Kokku'];
    const rifScores = ['Test', scoresKat1, scoresKat2, scoresKat3, scoresKat4, finalScore];
    const loScores = ['Test', scoresKat1, scoresKat2, scoresKat3, finalScore];
    let categories = [];
    let scores = [];
    let categoriesToMap = [];
    let scoresToMap = [];

    if (candidateCode === 'RIF') {
        categoriesToMap = rifCategories;
        scoresToMap = rifScores;
    } else {
        categoriesToMap = loCategories;
        scoresToMap = loScores;
    }

    categories = categoriesToMap.map((category) =>
        <th>{category}</th>
    );

    scores = scoresToMap.map((score) =>
        <td>{score}</td>
    )

    return (
        <div>
            <Container>
                <Row>
                    <Table striped>
                        <thead>
                            <tr>
                                {categories}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {scores}
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}

export default CandidateScores;