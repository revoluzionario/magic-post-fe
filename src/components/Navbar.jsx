import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className='font-weight-bold'>
            MAGICPOST
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Trang chủ</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#service">Dịch vụ</Nav.Link>
            <Nav.Link href="#location">Vị trí bưu cục</Nav.Link>
            <Nav.Link href="#ordertracking">Theo dõi đơn hàng</Nav.Link>
          </Nav>

          <LinkContainer to="/login">
            <Button>Đăng nhập</Button>
          </LinkContainer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}