import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

function LoScores({ scoresKat1, scoresKat2, scoresKat3, scoresKat4, finalScore }) {
    const loCategories = ['', 'Liiklustest', 'Isiksustest', 'Tõlkimine', 'Kokku'];
    const categories = loCategories.map((category) => 
        <th>{category}</th>    
    );
    return (
        <div className="text-center">
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
                                <td>Test</td>
                                <td>{scoresKat1}</td>
                                <td>{scoresKat2}</td>
                                <td>{scoresKat3}</td>
                                <td>{finalScore}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}

export default LoScores;
