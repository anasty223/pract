import {
  Image,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import FilmotekaImg from "../../Images/Filmoteka.jpg";
export default function Filmoteka() {
  return (
    <>
      <Container>
        <ContainerImg>
          <Heder>
            Project about searching movies, and adding favorite movies to a
            client personal library. Using pure JS, npm-packages and SCSS
          </Heder>
          <Image src={FilmotekaImg} alt="Filmoteka" />
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://vladimirbludov.github.io/team-project-filmoteka/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
          [HTML, SASS, JS, Handlebars, REST API, AJAX, Parcel] Arrays and
          functions Objects. Rest and spread operations.Array iterative methods.
          Prototypes and classes. Web storage. Interaction with the backend
        </Heder>
      </Container>
    </>
  );
}
