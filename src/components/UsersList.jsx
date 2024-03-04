import React from 'react'
import { Container } from 'react-bootstrap';
import User from './User';

export default function UsersList({users}) {
  return (
    <Container className='d-flex flex-wrap'>
        {users.map((user, key) => <User key={key} user={user} />)}
    </Container>
  )
}
