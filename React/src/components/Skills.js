import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../Assets/image/a.JPG';
import meter2 from '../Assets/image/e.JPG';
import meter3 from '../Assets/image/f.JPG';
import meter4 from '../Assets/image/g.JPG';
// import colorsharp from '../Assets/image/h.JPG';

export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
          <section className='skill' id="skills">
              <Container>
                  <Row>
                      <Col>
                      <div className="skill-bx">
                          <h2>Services Available</h2>
                          <p>abcdefghijklmnopqrstuvwxyz1234567890qwertyuiop,<br></br>qwertyuiopasdfghjklzxcvbnm</p>
                      <Carousel responsive={responsive} infinite={true} className="skill-slider">
                          <div className='item'>
                              <img src={meter1} alt="pic"/>
                              <h5>Electrical Services</h5>
                          </div>

                          <div className='item'>
                              <img src={meter2} alt="pic2"/>
                              <h5>Interior Services</h5>
                          </div>

                          <div className='item'>
                              <img src={meter3} alt="pic3"/>
                              <h5>Gardening Services</h5>
                          </div>

                          <div className='item'>
                              <img src={meter4} alt="pic4"/>
                              <h5>Plumbling Services</h5>
                          </div>
                      </Carousel>
                      </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      )
}