import {Container, Navbar, Nav} from 'react-bootstrap'

const MyNav = ({name}) => {

return (
    <Container>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{name}</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#browse">Browse</Nav.Link>
        </Nav>
      </Navbar>
    </Container> 
  )
}

export default MyNav