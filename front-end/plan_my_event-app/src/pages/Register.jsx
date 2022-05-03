import styled from "styled-components"
import Navbar from "../components/NavBar";
import {useState} from "react";

const [username, setName] = useState('');
const [password, setPass] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [location, setLocation] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState('');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`
Handling the name change
const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
    setPass(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handleAddress = (e) => {
    setAddress(e.target.value);
    setSubmitted(false);
};

// Handling the password change
const handleLocation = (e) => {
    setLocation(e.target.value);
    setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || email === '' || password === '') {
        setError('Please enter all the fields');
    } else {
        setError('');

        const optbody = {
            username: username,
            password: password,
            email: email,
            phone: phone,
            address: address,
            location: location
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(optbody)
        };

        console.log(optbody);
        fetch('http://localhost:8080/api/users/',
            options).then(function (response) {
            console.log(response)
            if (response.status === 500) {
                setError('Already exists!')
            } else {
                setSubmitted(true);
            }
            return response.json();
        });

        event.preventDefault();


    }
};


const RegisterForm = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Phone Number"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Input placeholder="Address"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Register = () => {
    return (
        <div>
            <Navbar/>
            <RegisterForm/>
        </div>
    )
}

export default Register