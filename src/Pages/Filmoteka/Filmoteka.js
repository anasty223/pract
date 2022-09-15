import { Image, Container, Link, ContainerLink } from "../Style";
import FilmotekaImg from "../../Images/Filmoteka.jpg";
export default function Filmoteka() {
  return (
    <>
      <Container>
        <h3>
          Project about searching movies, and adding favorite movies to a client
          personal library. Using pure JS, npm-packages and SCSS
        </h3>
        <Image src={FilmotekaImg} alt="Filmoteka" />
        <ContainerLink>
          <button>
            <Link
              href="https://vladimirbludov.github.io/team-project-filmoteka/"
              target="_blank"
            >
              Link to site
            </Link>
          </button>
        </ContainerLink>
        <h3>
          [HTML, SASS, JS, Handlebars, REST API, AJAX, Parcel] Arrays and
          functions Objects. Rest and spread operations.Array iterative methods.
          Prototypes and classes. Web storage. Interaction with the backend
        </h3>
      </Container>
    </>
  );
}
