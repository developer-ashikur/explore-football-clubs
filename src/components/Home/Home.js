import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[]);
    return (
        <div className='home'>
            <div className="header">
                <h1>Explore Football Clubs</h1>
            </div>
            <Container>
                <Row>
                    {
                        teams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;