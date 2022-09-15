import { Image, Container, Link, ContainerLink } from "../Style";
import MouviesImg from "../../Images/Mouvies.jpg";
export default function Mouvies() {
  return (
    <>
      <Container>
        <Image src={MouviesImg} alt="MouviesImg" />
        <ContainerLink>
          <button>
            <Link
              href="https://homeworkfivegrouptwotrounova.netlify.app/"
              target="_blanc"
            >
              Link to site
            </Link>
          </button>
        </ContainerLink>
        <h3>
          React Router and code splitting. Redux basics. Redux
          Toolkit.RestApi.Hooks.
        </h3>
      </Container>
    </>
  );
}
