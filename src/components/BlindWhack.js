import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'


const BlindWhack = ()=>{

    const [ gameBoardColor, setGameBoardColor ] = useState('black')
    const [ gamePieceColor, setGamePieceColor ] = useState('white')
    const [ x, setX ] = useState(0)
    const [y, setY] = useState(0);
    const [ click, setClick ] = useState(0)
    const [ message, setMessage ] = useState('')


    useEffect(()=>{

              if (click === 0) {
                setMessage("Welcome, Click Above Pls!");
              } else if (click === 1) {
                setMessage("Dont Click there");
              } else if (click === 2) {
                setMessage("Dont Click there either, dude");
              } else if (click === 3) {
                setMessage("Im starting to give up on you");
              } else if (click === 4) {
                setMessage("If youre not going to try then why bother?");
              } else if (click > 4) {
                setMessage("You suck, but at least you're trying. Good luck with your life.");
              }

    }, [click])
    
    
    const clicked = async () =>{
      
      console.log('clicked')
      const gameboardcolor = 'white'
      const gamePieceColor = 'red'
      setGameBoardColor(gameboardcolor)
      setGamePieceColor(gamePieceColor)
      setMessage('GG')
      localStorage.setItem('perm', "true")
    }
    
    if(x===0 && y===0){
      const X = Math.floor(Math.random() * 460);
      setX(X)
      const Y = Math.floor(Math.random() * 460);
      setY(Y)
    }
    
    const missedClick = ()=>{
      console.log('you missed')
      setClick(click+1)

    }
  
    return (
      <Container>
        <Container
          className="mx-auto"
          style={{
            marginTop: 20,
            width: 500,
            height: 500,
            backgroundColor: gameBoardColor,
          }}
          onClick={missedClick}
        >
          <a href="/home">
            <Card
              style={{
                height: 20,
                width: 20,
                left: x,
                top: y,
                backgroundColor: gamePieceColor,
              }}
              onClick={clicked}
            ></Card>
          </a>
        </Container>
        <Card
          className="mx-auto text-justify text-center"
          style={{
            marginTop: 20,
            width: 500,
            height: 100,
          }}
        >
          <Card.Body>Click Counter: {click}</Card.Body>
          <Card.Body>{message}</Card.Body>
        </Card>
      </Container>
    );
}


export default BlindWhack