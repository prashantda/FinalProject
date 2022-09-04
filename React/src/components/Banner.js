import { useState,useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../Assets/image/a.JPG"

export const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["WishIt"]
    const[text,setText]=useState('');
    const [delta,setDelta] =useState(300 - Math.random() * 100);
    const period=2000;

    useEffect(()=>{
        const ticker=setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick =()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText =isDeleting ? fullText.substring(0,text.length - 1) :fullText.substring(0,text.length+1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText ===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1)
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome To WISH-IT Solutions</span>
                    <h1>{``}<span className="wrap">{text}</span></h1>
                    <p>Hii how are u what are you doing what is your passion and how are you going to pursue </p>
                    <button onClick={()=>console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"></img>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}