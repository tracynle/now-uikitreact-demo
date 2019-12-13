import React from "react";

// reactstrap components
import { 
    Button, 
    Container, 
    Form, 
    FormGroup, 
    Input 
} from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("../../assets/img/home9.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">This is our great company.</h1>
            {/* May put social media here or search bar */}
              {/* <Form className="text-center ml-auto mr-auto col-md-8 col-lg-6" data-background-color="">
                  <FormGroup className="has-white">
                      <Input placeholder="Search" type="text"></Input>
                  </FormGroup>
              </Form> */}
            <Button
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
            </Button>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
