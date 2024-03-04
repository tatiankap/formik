import { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import UserForm from '../components/UserForm'
import ModalInfo from '../components/ModalInfo';
import UsersList from '../components/UsersList';

export default function Home() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user.hasOwnProperty('name')) {
            setUsers(users => ([...users, user]))
        }
    }, [user]);

    return (
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col>
                    < Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-4">
                                <h2 className="fw-bold mb-2 text-uppercase">Add new User to list</h2>
                                <UserForm addUser={(prop) => setUser(prop)} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            <ModalInfo user={user} handleChangeUser={(prop) => setUser(prop)} />
            <UsersList users={users} />
        </Container>
    )
}
