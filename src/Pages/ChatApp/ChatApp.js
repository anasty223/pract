import {
  Image,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import chat from "../../Images/chat.jpg";
export default function ChatApp() {
  return (
    <>
      <Container>
      <Heder>
          Description: application for communication
          </Heder>
        <ContainerImg>
 
          <Image src={chat} alt="chat" />
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://realtimchattrunova.netlify.app/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
        Technologies: socket.io, react, express, cors
        </Heder>
      </Container>
    </>
  );
}
