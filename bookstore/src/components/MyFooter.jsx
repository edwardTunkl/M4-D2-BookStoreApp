import { Container } from "react-bootstrap"



const MyFooter = () => {

          return (
            <Container>
              <footer className="d-flex justify-content-center my-5">
                <ul className="list-inline justify-content-center">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
              </footer>
            </Container>
          )
          }

export default MyFooter