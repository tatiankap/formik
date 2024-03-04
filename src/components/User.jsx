import { Card } from 'react-bootstrap'

export default function User({user}) {
  return (
    <Card className='m-3'>
        <Card.Title>
            {user.name}
        </Card.Title>
        <Card.Text>
            {user.email}
        </Card.Text>
        <Card.Text>
            {user.phone}
        </Card.Text>
    </Card>
  )
}
