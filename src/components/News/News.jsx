import { useRef, useState } from "react";
import { IoClose } from "react-icons/io5"; // Changed to a simpler, well-supported icon
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { navbarBrand, navs } from "../../config/config";
import logoImage from "../Images/logoImage.png";
import "../NavBar/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Handle search input
  const handleInputChange = (e) => setSearchQuery(e.target.value);

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
      setIsCollapsed(true);
    }
  };

  // Handle navigation click
  const handleNavClick = () => setIsCollapsed(true);

  return (
    <Navbar
      ref={navRef}
      className="navbar"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={!isCollapsed}
    >
      <Navbar.Brand className="nav-brand" onClick={() => navigate("/")}>
        <img src={logoImage} alt="Logo" className="logo" />
        {navbarBrand}
      </Navbar.Brand>

      {isCollapsed ? (
        <Navbar.Toggle
          className="border-0"
          aria-controls="basic-navbar-nav"
          onClick={() => setIsCollapsed(false)}
        />
      ) : (
        <IoClose
          size={40}
          className="close-btn"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav mr-auto" onClick={handleNavClick}>
          {navs.map((navItem) => (
            <LinkContainer to={navItem.page} key={uuidv4()}>
              <Nav.Link className="nav-item">{navItem.nav}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>

        <Form className="search-form" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Explore news..."
            className="form-input form-control-lg mt-lg-2"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button
            className="search-btn mt-lg-2 ml-2"
            type="submit"
            disabled={!searchQuery.trim()}
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
