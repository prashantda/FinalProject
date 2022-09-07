import { Container } from "react-bootstrap";
import { Row, Col,Nav,Tab} from "react-bootstrap";
import { ProjectCards } from './../Shared/ProjectCards.js';
import projImg1 from '../../Assets/image/a.JPG'
import projImg2 from '../../Assets/image/e.JPG'
import projImg3 from '../../Assets/image/f.JPG'

export const Projects=()=>{
    const projects = [
        {
            title:"Electrical Services",
            description:"Repairing and WholeSale",
            imgUrl:projImg1,
        },
        {
            title:"Interior Services",
            description:"Design & Developement",
            imgUrl:projImg2,
        },
        {
            title:"Gardening Services",
            description:"Cleaning and Other",
            imgUrl:projImg3,
        },
        {
            title:"Plumbling Services",
            description:"All Types of Solution",
            imgUrl:projImg1,
        },
        {
            title:"BathRoom Cleaning Services",
            description:"Design & Developement",
            imgUrl:projImg2,
        },
        {
            title:"Home Decore Services",
            description:"Design & Developement",
            imgUrl:projImg3,
        },
    ];
return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Wish-IT Services</h2>
                <p>These all Services are available at Your Door</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
               <Tab.Pane eventKey="first">
                   <Row>
                       {
                           projects.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row>
               </Tab.Pane>
               <Tab.Pane eventKey="second">
               <Row>
                       {
                           projects.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row>
               </Tab.Pane>
               <Tab.Pane eventKey="third">
               <Row>
                       {
                           projects.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row>
               </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
)
}