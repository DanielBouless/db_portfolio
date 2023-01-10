import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/esm/Container';
import Accordion from "react-bootstrap/Accordion";


const About = () => {

const engSkillsList = ["AutoDesk Revit", "AutoDesk AutoCAD", "Trane Trace 700", "Revu Bluebeam","Microsoft Office Suite"];
const progSkillsList =["Python", "JavaScript", "html", "CSS", 'React', 'React-Native', 'NodeJS', 'ExpressJS']

const myEngSkills = engSkillsList.map((skill) => {
  return <Accordion.Body>{skill}</Accordion.Body>;
});

const myProgSkills = progSkillsList.map((skill)=>{
  return <Accordion.Body>{skill}</Accordion.Body>;
})

  return (
    <Container className="page">
      <Card
        className="mx-auto"
        style={{
          marginTop: 20,
          width: 450,
          height: "fit-content",
        }}
      >
        <a href="/about">
          <Card.Img variant="top" src="myface.png" />
        </a>
        <Card.Text>This is my face^^^</Card.Text>
      </Card>

      <Card
        className="about-card mx-auto"
        style={{
          marginTop: 20,
          width: 800,
          height: "fit-content",
        }}
      >
        <Card.Title style={{ marginTop: 10, marginLeft: 10 }}>
          Take a look at the stuff I did with my life so far
        </Card.Title>
        <Accordion style={{margin:10}}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Education</Accordion.Header>
            <Accordion.Body>NJIT - Mechanical Engineer</Accordion.Body>
            <Accordion.Body>
              NJIT Bootcamp - Software Development
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Employment</Accordion.Header>
            <Accordion.Body>
              French and Parrello, Associates - Senior Designer
            </Accordion.Body>
            <Accordion.Body>Karnak Architecture - Team Leader</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Engineering Related Skills</Accordion.Header>
            <Accordion.Body>{myEngSkills}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Programming Related Skills</Accordion.Header>
            <Accordion.Body>{myProgSkills}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Container>
  );
};

export default About;
