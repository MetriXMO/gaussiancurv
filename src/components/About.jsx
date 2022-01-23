import { useState, React} from 'react'
import { Fade } from "react-awesome-reveal";
import './styles.css';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function ControlledTabs() {
  const [key, setKey] = useState('home');
return (
<Tabs
 id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
>
  <Tab eventKey="home" title="Home">
   kimmy 
  </Tab>
  <Tab eventKey="profile" title="Profile">
    danpa
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
   bapa
  </Tab>
</Tabs>
);
}
<ControlledTabs />
const About = ({ darkMode }) => {




  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1800;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <Fade>
        <Container align='center'>
          <Row>
            <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                           
                    <Card.Header><div class= "lead"><h5>What is GC and it's establishment </h5></div></Card.Header>      <Card.Body> 
                     <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>
<br></br>
<br></br>
 <br></br>

 </Card.Text>
                            </Card.Body></Card>
            </Col>
 </Row> &nbsp;
<Row>   <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                           
                    <Card.Header><div class= "lead"><h5>Starting Works and Experience</h5></div></Card.Header>      <Card.Body> 
                     <Card.Text align="left" class={darkMode? "text-secondary" : "text-light"}>
<br></br>
<br></br>
 <br></br>

 </Card.Text>
                            </Card.Body></Card>
            </Col>

            </Row> &nbsp;  




<Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead">Where can we find the articles and past contests</div></Card.Header>
                                    <Card.Body>   <Card.Text align="left">
<br></br>

</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>


<Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>Some fun events</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left">
<br></br>

</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>
      <Row>
  <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>How can I report a error if I found a error in material</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left">
<br></br>

</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>
                                   
        <Row>                           <Col lg={12} align='left'>
               <Card className="skill-nbcard">
                             
                                   <Card.Header><div class="lead"><h5>How can we contact GC staff</h5></div></Card.Header>
                                    <Card.Body>   <Card.Text align="left">
<br></br>

</Card.Text>
                                </Card.Body></Card>
            </Col>
</Row>
 </Container>
      </Fade>
    </div>
  )
}

export default About