
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';

const validateForm = ({ name, email, phone }) => {
    const errors = {};

    if (!name) {
        errors.name = 'Required';
    }

    if (!email) {
        errors.email = 'Required';
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errors.email = 'Not valide Email value';
    }
    if (!phone) {
        errors.phone = 'Required';
    } else if (!/(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm.test(phone)) {
        errors.phone = 'Must be a phone number';
    } else if (phone.length > 13) {
        errors.phone = 'Must be at least 12 digits'

    }
    return errors;
};


function UserForm({ addUser }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validate: validateForm,
        onSubmit: (values) => {
            addUser(values)
        }

    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    label='Number input'
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                {formik.touched.name && formik.errors.name &&
                    <Form.Text className="text-danger">
                        {formik.errors.name}
                    </Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    name='email'
                    onBlur={formik.handleBlur}
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                    value={formik.values.email} />
                {formik.touched.email && formik.errors.email &&
                    <Form.Text className="text-danger">
                        {formik.errors.email}
                    </Form.Text>
                }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number: </Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Phone number 12 digits start form '+'"
                    name="phone"
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange} />
                {formik.touched.phone && formik.errors.phone &&
                    <Form.Text className="text-danger">
                        {formik.errors.phone}
                    </Form.Text>
                }
            </Form.Group>
            <Button variant="primary" type="submit">
                Add user
            </Button>
        </Form>
    );
}

export default UserForm;