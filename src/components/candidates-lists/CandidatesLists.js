import React from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CandidatesListsItem from './CandidatesListsItem';

const CandidatesLists = ({ candidatesLists }) => {
    const data =  [candidatesLists.map((listItem, i) =>   {        
        return (
        <CandidatesListsItem
            id={candidatesLists[i].id}
            enabled={candidatesLists[i].enabled}
            listCode={candidatesLists[i].listCode}
            year={candidatesLists[i].year}
            created={candidatesLists[i].created}
            
        />
    
    )})];
            
    const columns = [
    {
        Header: "Nr",
        accessor: "id"
    },
    {
        Header: "Olek",
        accessor: "listStatus"
    },
    {
        Header: "Aasta",
        accessor: "year"
    },
    {
        Header: "Õppekava",
        accessor: "listCode"
    },
    {
        Header: "Loodud",
        accessor: "formattedDate"
    },
    {
        Header: "Tegevus",
        accessor: "enabled"
    }
    ]

    return (
        <div style={{ marginTop: `${window.innerHeight/20}px` }}>
            
            <Container className="text-right">
                <Row>
                    {/* siin peab vaatama kuidas Button viiks õigele lehele */}
                    <Col md={{ offset: 11 }}>
                        <Button><Link to="/import">Import</Link></Button>
                            </Col>
                </Row>
                <Table>
                <Row className="candidates-list-header">
                        <Col>Nr</Col>
                        <Col>Olek</Col>
                        <Col>Aasta</Col>
                        <Col>Õppekava</Col>
                        <Col>Loodud</Col>
                        <Col>Tegevus</Col>
                </Row>
                {/* {
                candidatesLists.map((listItem, i) => {
                    return (
                        <CandidatesListsItem
                            id={candidatesLists[i].id}
                            listCode={candidatesLists[i].listCode}
                            year={candidatesLists[i].year}
                            created={candidatesLists[i].created}
                            enabled={candidatesLists[i].enabled}
                        />
                    )
                })
            } */}
            <Row data={data} columns={columns} />
    
                </Table>
            </Container>

            

        </div>
    )
}



  




export default CandidatesLists;