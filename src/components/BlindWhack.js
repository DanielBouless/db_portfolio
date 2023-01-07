import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useRef, useState } from 'react'
import { redirect } from 'react-router-dom'




const BlindWhack = ()=>{



    const [ moveButton, setMoveButton ] = useState()
    const [ gameBoardColor, setGameBoardColor ] = useState('black')
    const [ gamePieceColor, setGamePieceColor ] = useState('white')
    const [ x, setX ] = useState(0)
    const [y, setY] = useState(0);
    
    const clicked = async () =>{

        console.log('clicked')
        const gameboardcolor = 'white'
        const gamePieceColor = 'red'
        setGameBoardColor(gameboardcolor)
        setGamePieceColor(gamePieceColor)

    }    
    const X = Math.floor(Math.random() * 460);
    //setX(X)
    const Y = Math.floor(Math.random() * 460);
    //setY(Y)
    
    const missedClick = ()=>{
        console.log('you missed')
    }
  
    return (
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
        GameBoard
        <Card
          style={{
            height: 20,
            width: 20,
            left: X,
            top: Y,
            backgroundColor: gamePieceColor,
          }}
          onClick={clicked}
        ></Card>
      </Container>
    );
}


export default BlindWhack