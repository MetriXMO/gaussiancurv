import { useState, React } from 'react'
import { Slide } from "react-awesome-reveal";
import helloLight from '../components/soap.png';
import helloDark from '../components/soap.png';
import helloLight1 from '../components/jim.png';
import helloDark1 from '../components/jim.png';
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/esm/Card';
import { Mdark } from './stylee';
 function AlertDismissibleExample() {
  const [show, setShow] = useState(true);




const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
             <br></br>
                    <h4 className="lead" align="center"><b>Past Year Papers and Problem  Sets</b></h4>
                    <br></br>
                    <Row>
                      <Col lg={6}>
                     <Card className="skill-nbcard">
                    
                     <Card.Header><div class={darkMode ? "lead" : "lead"}>MMO 2021 Day 1</div></Card.Header>
                                <Card.Body>
                                              
                                    <Card.Text align="left">
                                                   
                                       <a  href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%201.pdf" target="_blank" rel="noreferrer noopener"> 
                                          <Mdark  align="left">Download</Mdark>  </a>&nbsp;&nbsp; </Card.Text>
 
                                </Card.Body>

                            </Card></Col>
                             
 <Col lg={6}>
                            <Card className="skill-nbcard">
                           
                           <Card.Header><div class={darkMode ? "lead" : "lead"}>MMO 2020 Day 2</div></Card.Header>
                                <Card.Body >
                                      
                                      
                                      <Card.Text align="left">
                                             
  <a href="https://aritra-12.github.io/pdfs/MMO%202020%20DAY%202.pdf" target="_blank" rel="noreferrer noopener">
                                      
                                            <Mdark  align="left">Download</Mdark> 
                                        </a>&nbsp;&nbsp;</Card.Text>
                                </Card.Body>

                             </Card></Col>  
                    </Row>


                    <br></br>

  
                </Container>
            </Slide>
        </div>
    )
}

export default Skills
