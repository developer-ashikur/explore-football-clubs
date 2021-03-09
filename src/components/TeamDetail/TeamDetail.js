import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TeamDetail.css';

const TeamDetail = () => {
    const {id} = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[id]);
    const {strTeamBadge, strTeam, intFormedYear, strCountry, strGender} = team;
    return (
        <div>
            <div className="header">
                <img src={strTeamBadge} className='header-img' alt=""/>
            </div>
            <Container>
                <Row className='bg-success text-white p-3 my-4 rounded'>
                    <div className="col-md-8">
                            <h1>{strTeam}</h1>
                            <h6>Founded: {intFormedYear} </h6>
                            <h6>Country: {strCountry} </h6>
                            <h6>Sport type: Football </h6>
                            <h6>Gender: {strGender} </h6>
                            
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src="https://i.ibb.co/3TdKkcB/male.png" alt=""/>
                    </div>
                </Row>
                <Row>
                    
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
};

export default TeamDetail;