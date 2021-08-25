import {Container, Jumbotron, Button} from "react-bootstrap"





const MyJumbotron = ({name}) => {

return (
  <Container>
    <Jumbotron className="bg-warning py-4">
      <h1>Hello and welcome to {name} !</h1>
      <br />
      <p>
        Take a look around and enjoy yourself!
      </p>
      <br />
      <p>
        <Button variant="success">More Information</Button>
      </p>
  </Jumbotron>
</Container>

)
}

export default MyJumbotron