import {Container, Navbar, Nav} from 'react-bootstrap'
import { Link,withRouter } from 'react-router-dom'

const MyNav = ({name}, {location}) => {

return (
    <Container>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{name}</Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/">
                <div 
                className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
                >Home</div>
            </Link>
            <Link to="/about">
                <div 
                className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                >About</div>
            </Link>
            <Link to="/about">
                <div 
                className={location.pathname === '/register' ? 'nav-link active' : 'nav-link'}
                >Register</div>
            </Link>
        </Nav>
      </Navbar>
    </Container> 
  )
}

export default withRouter(MyNav)