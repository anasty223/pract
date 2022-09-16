import { Image, Container, Link, ContainerLink, Button } from "../Style";
import KapustaImg from "../../Images/Kapusta.jpg";
export default function Phonebook() {
  return (
    <>
      <Container>
        <Image src={KapustaImg} alt="KapustaImg" />
        <ContainerLink>
          <Button>
            <Link href="https://kapustaapp.netlify.app/" target="_blanc">
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <h3>React-router-dom,propsTypes,react-redux,Node.js</h3>
      </Container>
    </>
  );
}
