import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Team = ({ team }) => {
    const { strTeam, strTeamBadge, idTeam } = team;
    return (
        <div className='col-xl-4 col-lg-6 text-center g-4 my-4'>
            <Card className='shadow'>
                <Card.Img variant="top" src={strTeamBadge} className='w-50 mx-auto' />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type: Football
                    </Card.Text>
                    <Button as={Link} to={`/team/${idTeam}`} variant="success" size="lg">
                        Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Team;