import { Image, Container, Link, ContainerLink, Button, Heder } from "../Style";
import MouviesImg from "../../Images/Mouvies.jpg";
export default function Mouvies() {
  return (
    <>
      <Container>
        <Image src={MouviesImg} alt="MouviesImg" />
        <ContainerLink>
          <Button>
            <Link
              href="https://homeworkfivegrouptwotrounova.netlify.app/"
              target="_blanc"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
          React Router and code splitting. Redux basics. Redux
          Toolkit.RestApi.Hooks.
        </Heder>
      </Container>
    </>
  );
}
