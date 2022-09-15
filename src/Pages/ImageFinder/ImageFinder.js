import ImageFinderImg from "../../Images/ImageFinder.jpg";
import { Image, Container, Link, ContainerLink } from "../Style";

export default function ImageFinder() {
  return (
    <>
      <Container>
        <Image src={ImageFinderImg} alt="ImageFinderImg" />
        <ContainerLink>
          <button>
            <Link
              href="https://anasty223.github.io/goit-react-hw-04-hooks-images_42/"
              target="_blanc"
            >
              Link to site
            </Link>
          </button>
        </ContainerLink>
        <h3>React basic. RestApi. Hooks.</h3>
      </Container>
    </>
  );
}
