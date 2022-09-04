import { Container,Row,Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../Assets/image/a.svg';
import navIcon1 from '../Assets/image/b.png';
import navIcon2 from '../Assets/image/c.png';
import navIcon3 from '../Assets/image/d.png';

export const Footer=()=>{
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    {/* <MailchimpForm /> */}
                    <Col sm={6}>
                        <img src={logo} alt="logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1}/></a>
                            <a href=""><img src={navIcon2}/></a>
                            <a href=""><img src={navIcon3}/></a>
                        </div>
                        <p>CopyRight 2022<br></br>All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}