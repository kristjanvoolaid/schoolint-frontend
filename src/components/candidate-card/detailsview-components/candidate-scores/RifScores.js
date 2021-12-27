import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

function RifScores({ specialityCode, scoresKat1, scoresKat2, scoresKat3, scoresKat4, finalScore }) {    
    const rifCategories = ['', 'Kat1', 'Kat2', 'Kat3', 'Kat4', 'Kokku'];
    const categories = rifCategories.map((category) => 
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
                                <td>{scoresKat4}</td>
                                <td>{finalScore}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </div>
    )
}

export default RifScores;
