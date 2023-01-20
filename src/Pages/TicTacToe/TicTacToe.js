import {
  ImageTic,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import authTicTac from "../../Images/authTicTac.jpg";
import ticTac2 from "../../Images/ticTac2.jpg";
import ticTac3 from "../../Images/ticTac3.jpg";
import ticTac4 from "../../Images/ticTac4.jpg";
export default function ChatApp() {
  return (
    <>
      <Container>
            <Heder>
          Description: Multiplayer Tic Tac Toe with a Realtime Chat + Authentication 
          </Heder>
        <ContainerImg>
      
        <div className="containerImg"> 
         <ImageTic className="imgT" src={authTicTac} alt="chat" />
          <ImageTic className="imgT" src={ticTac2} alt="chat" />
          <ImageTic className="imgT" src={ticTac3} alt="chat" />
          <ImageTic className="imgT" src={ticTac4} alt="chat" />
          </div>
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://tic-tac-toe-multiplayers-chat.vercel.app/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
      <div style={{marginBottom:20}}>  Technologies:</div>
      <ul className="listOfTicTac">
        <li>React Hooks: UseState, UseEffect, State Management</li>
        <li>React/Javascript Logic, Tic Tac Toe, Map</li>
        <li>Creating an authentication system in React using NodeJS + ExpressJS</li>
        <li>Working with the GetStream API</li>
      </ul>

        </Heder>
      </Container>
    </>
  );
}
