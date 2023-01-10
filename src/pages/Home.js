import Card from 'react-bootstrap/Card'


const Home = ()=>{

    return (
      <div className='page'>
        <Card
          className="mx-auto text-justify text-center"
          style={{ marginTop: 55, width: 450 }}
        >
          <Card.Body>
            <Card.Title>YAAAAY, YOU MADE IT!!!!</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="mx-auto"
          style={{
            marginTop: 20,
            width: 450,
            height: "fit-content",
          }}
        >
          <a href="/about">
            <Card.Img src="myface.png" />
          </a>
        </Card>

        <Card
          className="mx-auto text-justify text-center"
          style={{ marginTop: 20, width: 450 }}
        >
          <Card.Body>
            <Card.Title>Now I know its not the greatest looking piece of art, but it is a work in progress. Welcome to my site. Click around, make yourself comfortable and keep checking back every once in a while, yeah.</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Home