import React from "react";
import DarkFooter from '../../components/Footers/DarkFooter';
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import Navbar from "../../components/Navbar/Navbar";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import DefaultFooter from "../../components/Footers/DefaultFooter";

function Home() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Facilis voluptatibus dolores atque, quibusdam et consequuntur ullam commodi hic numquam laborum incidunt animi eaque dolorum? 
                  Ipsam expedita deserunt at tempora enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam praesentium magni excepturi, 
                  nesciunt dolorum aliquid dolorem, sed laboriosam autem expedita at earum quasi tempore, maiores recusandae totam iusto quos!
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/home1.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur libero neque accusamus ipsum sit assumenda ipsa unde eos. 
                      Deleniti ipsa alias quibusdam assumenda perferendis saepe!" <br></br>
                      <br></br>
                      <small>-NOAA</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/home2.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("../../assets/img/home3.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quos ullam aliquid obcaecati, ea tempore reprehenderit! 
                   Commodi nihil, atque eaque corporis ipsam deleniti nobis pariatur placeat iure voluptas perspiciatis sint.
                  </h3>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Vitae aliquet nec ullamcorper sit amet risus. Venenatis a condimentum vitae sapien pellentesque. Id aliquet lectus proin nibh nisl condimentum. 
                  Porta nibh venenatis cras sed felis eget velit aliquet. Mauris nunc congue nisi vitae. Arcu risus quis varius quam. Nec ultrices dui sapien eget mi proin. 
                  Netus et malesuada fames ac turpis egestas integer eget aliquet. Quis lectus nulla at volutpat diam ut. Quis risus sed vulputate odio ut enim blandit. 
                  Urna condimentum mattis pellentesque id nibh tortor id aliquet. Malesuada fames ac turpis egestas integer eget aliquet. 
                  Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Egestas erat imperdiet sed euismod nisi porta. 
                  Elit sed vulputate mi sit amet mauris commodo quis. Mattis molestie a iaculis at. Viverra aliquet eget sit amet tellus cras adipiscing enim.
                  </p>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Vitae aliquet nec ullamcorper sit amet risus. Venenatis a condimentum vitae sapien pellentesque. Id aliquet lectus proin nibh nisl condimentum. 
                  Porta nibh venenatis cras sed felis eget velit aliquet. 
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Subscribe to our Newsletter!</h2>
            <p className="description">Get Updates on New Listings and More</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Home;
