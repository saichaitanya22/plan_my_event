import styled from "styled-components"
import Navbar from "../components/NavBar";

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
  margin-top: 20px;
`

const RegisterForm = () => {
    return (
        <Container>
            <Wrapper>
                <Title>REVIEW</Title>
                <Form>
                    <Input placeholder="Name"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Vendor name"/>
                    <Input placeholder="Review"/>
                    <p><br/></p>
                    <Button>SUBMIT</Button>
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