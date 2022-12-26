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
        <ContainerImg>
          <Heder>
          Description: application for communication
          </Heder>
          <Image src={chat} alt="Filmoteka" />
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://chatapptru.netlify.app/"
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
