import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetail = () => {
    const { id } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [id]);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strDescriptionES, strFacebook, strTwitter, strYoutube } = team;
    return (
        <div className='team-detail'>
            <div className="header">
                <img src={strTeamBadge} className='header-img' alt="" />
            </div>
            <Container className='p-4'>
                <Row className='bg-success text-white p-3 my-4 rounded'>
                    <div className="col-md-8">
                        <h1>{strTeam}</h1>
                        <h5> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear} </h5>
                        <h5> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </h5>
                        <h5> <FontAwesomeIcon icon={faFutbol} /> Sport type: Football </h5>
                        <h5> <FontAwesomeIcon icon={faMars} /> Gender: {strGender} </h5>

                    </div>
                    <div className="col-md-4">
                        {
                            strGender === 'Male' ? <img className='img-fluid' src="https://i.ibb.co/3TdKkcB/male.png" alt="" />
                                : <img className='img-fluid' src="https://i.ibb.co/CzscjHX/female.png" alt="" />
                        }

                    </div>
                </Row>
                <Row>
                    <p>{strDescriptionEN}</p>
                    <p>{strDescriptionES}</p>
                </Row>

                <div className="social-menu">
                    <ul>
                        <li><a href={strFacebook} style={{color : '#3b5998'}}><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href={strTwitter} style={{color : '#1da1f2'}}><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href={strYoutube} style={{color : 'red'}}><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>

            </Container>
        </div>
    );
};

export default TeamDetail;