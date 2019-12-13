import React from "react";

// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    FormGroup,
    Input,
    UncontrolledDropdown,
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";

function NavbarMenu() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
                <Container>
                    <NavbarBrand href="/" onClick={e => e.preventDefault()}>
                        Real Estate Co.
                    </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        id="navbarNavDropdown"
                        type="button"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button
                        className="navbar-toggler navbar-toggler"
                        onClick={() => {
                            document.documentElement.classList.toggle("nav-open");
                            setCollapseOpen(!collapseOpen);
                        }}
                        aria-expanded={collapseOpen}
                        type="button"
                    >
                        <span className="navbar-toggler-bar top-bar"></span>
                        <span className="navbar-toggler-bar middle-bar"></span>
                        <span className="navbar-toggler-bar bottom-bar"></span>
                    </button>

                    <Collapse className="justify-content-end" isOpen={collapseOpen} navbar >
                        <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
                            <Nav navbar>
                                <NavItem className="active">
                                    <NavLink href="/" onClick={e => e.preventDefault()}>
                                    Home <span className="sr-only">(current)</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about" onClick={e => e.preventDefault()}>
                                    About
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        aria-haspopup={true}
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        href="/properties"
                                        id="navbarDropdownMenuLink"
                                        nav
                                        onClick={e => e.preventDefault()}
                                        >
                                        Properties
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                                        <DropdownItem
                                            href="/currentListings"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Current Listings
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/soldListings"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Sold Listings
                                        </DropdownItem>
                                        <DropdownItem
                                            href="/openHouse"
                                            onClick={e => e.preventDefault()}
                                        >
                                            Open House
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/contact" onClick={e => e.preventDefault()}>
                                    Contact
                                    </NavLink>
                                </NavItem>
                                {/* May use social media links instead */}
                                {/* <Button
                                  className="btn-icon btn-round"
                                  color="info"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="fab fa-facebook-square"></i>
                                </Button>
                                <Button
                                  className="btn-icon btn-round"
                                  color="info"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="fab fa-twitter"></i>
                                </Button>
                                <Button
                                  className="btn-icon btn-round"
                                  color="info"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="fab fa-google-plus"></i>
                                </Button> */}

                            </Nav>
                            <Form className="form-inline ml-auto" data-background-color="">
                                <FormGroup className="has-white">
                                    <Input placeholder="Search" type="text"></Input>
                                </FormGroup>
                            </Form>
                        </UncontrolledCollapse>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarMenu;
