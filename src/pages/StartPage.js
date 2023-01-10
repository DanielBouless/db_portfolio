import BlindWhack from "../components/BlindWhack";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

const StartPage = () => {
  localStorage.setItem('perm', "")
    const [ playState, setPlayState ] = useState(false)
    const play = ()=>{
       setPlayState(true)
    }

    const display = playState ? (
      <BlindWhack />
    ) : (
      <Container style={{ display: "flex", justifyContent: 'center', marginTop: 250 }}>
        <Button onClick={play}> Play To Enter</Button>
      </Container>
    );

  return( <Container className="page">{display}</Container>);
};

export default StartPage;
