import { React } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
#import { #AttentionSeeker } #from 'react-awesome-reveal';
#import #Particles #from "../components/particles";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { MagicalButton, Flex, Mdark } from './stylee';
import {
 FooterLink,
} from "./FooterStyles";

const Home = ({ darkMode }) => {
 


    return ( <div>
            
        <div id="particles-js" 
       <div class="header"> 
            <Container align="center">
        <#AttentionSeeker #effect="pulse">  
              
   <#Particles />
                 
      <span class="site-title">Gaussian Curvature</span>
                       
                      
                 

              
<Col>
<div align="center" class="text-secondary" >  
<div align="center" class="lead">
 
            <h5 align="center"> GC has turned over one year, check out <FooterLink  href="https://artofproblemsolving.com/community/c5h2766985p24238194"><h5>OPMC</h5></FooterLink>  </h5> </div> 
           
</div>
 
              </Col> 
 
 </AttentionSeeker>
 </Container>


</div>
</div>



 
 
         

            <br></br>
           
   <Container align='left'> <Row>
            <Col lg={15} align='left'>
          <Card className="skill-nbcard">   
                <Card.Header><div class= "lead" >About Us</div></Card.Header>
                                <Card.Body>
                                   
                                    <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}> The Gaussian Curvature team consists of Math Olympiad students who enjoy Mathematics to a great extent. We aim to help others discover their love for Mathematics beyond the school syllabus, and to develop their passion for problem-solving. Through our training materials and contests, we hope to help those who have a keen interest in Math Olympiad excel.
<br></br>
<br></br>   <Flex>
       {darkMode? <MagicalButton href="">Details</MagicalButton> : <Mdark href="">About Us</Mdark> }
       {darkMode? <MagicalButton>Welcome</MagicalButton> : <Mdark>Welcome</Mdark> }
      </Flex> </Card.Text>
                                </Card.Body></Card>
            </Col>
 
            </Row>    </Container> &nbsp;   
       </div>
    )
}

export default Home
