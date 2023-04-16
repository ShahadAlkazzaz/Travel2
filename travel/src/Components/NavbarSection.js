import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MDBIcon } from 'mdb-react-ui-kit';
import { BsFillPersonFill } from 'react-icons/bs';
import {Route, Routes , Link} from "react-router-dom"
import Home from '../Home'
import Trip from '../Trip'
import About from '../About'
import SignUp from '../SignUp'


function NavbarSection() {

    return (
<div>
        <Navbar   className='navbar-form' collapseOnSelect expand="lg"   >
        <Container>
          <Navbar.Brand className='logo'><MDBIcon icon="globe-americas" />

          <span className='skytour-color'>  SkyTour</span>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link id='link-nav'  to={'/'} >Home</Link>
              <Link id='link-nav' to={'/trip'}>Trip</Link>
              <Link id='link-nav' className='sign-up' to={'/about'}>
                                About
                            </Link>
            </Nav>
            <Nav>
              <Link  className='sign-up' to={'/SignUp'}> <BsFillPersonFill/> Sign up</Link>

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trip" element={<Trip/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
      </div>
     );
}

export default NavbarSection;
