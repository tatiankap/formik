import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalInfo({ user, handleChangeUser }) {
    const [show, setShow] = useState(false);

    const handleClose = () => { handleChangeUser({}); setShow(false) };

    useEffect(() => {
        if(user.hasOwnProperty('name')){
            setShow(true)
        }
    }, [user])

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>User <span className='text-success'>{user.name}</span> was added!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone number: {user.phone}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
