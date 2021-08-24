import {Container, Jumbotron, Button} from "react-bootstrap"





const MyJumbotron = ({name}) => {

return (
  <Container>
    <Jumbotron>
      <h1>Hello and welcome to {name} !</h1>
      <p>
        Take a look around and enjoy yourself!
      </p>
      <p>
        <Button variant="primary">More Information</Button>
      </p>
  </Jumbotron>
</Container>

)
}

export default MyJumbotron