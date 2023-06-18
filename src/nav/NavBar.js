import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navbars = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/" style={styles.bold}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
            Thiago Bueno Garcia
            </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>
                Contact
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink href='https://www.linkedin.com/in/thiago-bueno-garcia-34604a25a/'>
                        LinkedIn
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink href='https://github.com/thiagobgarc'>
                        GitHub
                    </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={styles.bold}>Menu</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

const styles = {
    bold: {
        fontWeight: 'bold'
    }
}