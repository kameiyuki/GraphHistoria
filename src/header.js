import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Headerfunc() {
    return (
        <Navbar expand="lg" variant="light" bg="light">
            <Container>
                <Navbar.Brand href="/">Graph Historia</Navbar.Brand>
            </Container>
        </Navbar>
    );
  }
  

  export default Headerfunc;
