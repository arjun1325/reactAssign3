import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
function Root() {
    return (
        <>
  
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Products</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
}

export default Root;
