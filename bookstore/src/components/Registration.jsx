import { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Register extends Component {

      state={
            name:"",
            surname:"",
            email: "",
            password: "",
            confirmPassword: ""
      }

     handleSubmit =(e) => {
      e.preventDefault()
        if(this.state.name.length<2){
          alert("Name with more than 1 Character, please")
        } else if (this.state.surname.lenght<3){
          alert("Surname with more than 2 Characters, please ")
        } 

    }


  render() {
    return (
      <div>
        <Container style={{width:"300px"}} className="mt-3">
          <Form onSubmit={this.handleSubmit} >
            <Form.Group>
              <Form.Control type="text" placeholder="Enter Name here" required value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })} />
       
              <Form.Control type="text" placeholder="Enter Surname" required value={this.state.surname}
              onChange={(e) => this.setState({ surname: e.target.value })} />
                        
              <Form.Control type="email" placeholder="Enter email" required value={this.state.email}
               onChange={(e) => this.setState({ email: e.target.value })}/>          
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required value={this.state.password}
               onChange={(e) => this.setState({ password: e.target.value })}/>
              <Form.Control type="password" placeholder="Confirm Password" required value={this.state.confirmPassword}
               onChange={(e) => this.setState({ confirmPassword: e.target.value })}/>
            </Form.Group>       
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Register;
