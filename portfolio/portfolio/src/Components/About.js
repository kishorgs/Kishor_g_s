import {React, Component, useState } from "react";
import '../App.css';
import {Container,Row,Tabs,Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./img/DSC_0693-01.jpeg";

function About() {


  const [tab, setTab] = useState('skills');

  return (
    <div className="About">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={img1} alt="kishor"></img>
            </div>
            <div className="about-col-2">
              <h2>
                About<span> Me</span>
              </h2>
              <p>
              I am a Computer Science Undergraduate from Kuvempu University, 
              interested in Programing with some basic Electronics knowledge. 
              Also interested in music and Writing stories. 
              Now pursuing my MCA degree at Nitte Meenakshi Institute Of Technology Bengaluru, 
              Looking to build a career as a software developer to improve my knowledge and skills, 
              with a good network. Lives in Bengaluru.
              </p>

<Container className="tab-links">
  <Row>
              <Tabs justify variant="pills" defaultActiveKey="tab-1">
                <Tab eventKey="tab-1" title="Skills" className="tab-link">
                <div>
                <ul>
                  <li>
                    <span>web development</span>
                    <br />
                    Html, css, js, Reactjs, Expressjs, Nodejs, bootstrap.
                  </li>
                  <li>
                    <span>Programming languages</span>
                    <br />
                    C, Java, Python.
                  </li>
                  <li>
                    <span>Database</span>
                    <br />
                    SQL, MongoDB.
                  </li>
                  <li>
                    <span>Soft skills</span>
                    <br />
                    Communication
                  </li>
                </ul>
              </div>

                </Tab>
                <Tab eventKey="tab-2" title="Education" className="tab-link">
                <div>
                <ul>
                  <li>
                    <span>Nitte Meenakshi Institute of Technology, Bangalore.</span>
                    <br />
                    MCA: CGPA: 8.4

                  </li>
                  <li>
                    <span>SRNMN College of applied sciences, Shivamogga.</span>
                    <br />
                    Bsc: 82%

                  </li>
                  <li>
                    <span>H S Rudrappa National PU College, Shivamogga.</span>
                    <br />
                    PUC: 60.56%
                  </li>
                  <li>
                    <span>MRS Yashodamma Nagathi High School, Tarikere.</span>
                    <br />
                    SSLC: 79.36%
                  </li>
                </ul>
              </div>
                </Tab>
                <Tab eventKey="tab-3" title="Hobbies" className="tab-link">
                <div>
                <ul>
                  <li>
                    <span>Singing</span>
                    <br />
                  </li>
                  <li>
                    <span>Writing Poetry</span>
                    <br />
                  </li>
                  <li>
                    <span>Traveling</span>
                    <br />
                  </li>
                </ul>
              </div>
                </Tab>

              </Tabs>
    </Row>
</Container>
            </div>
          </div>
        </div>
      </div>

              

              
  );
}

export default About



