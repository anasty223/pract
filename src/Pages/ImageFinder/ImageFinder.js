import ImageFinderImg from "../../Images/ImageFinder.jpg";
import { Image, Container, Link, ContainerLink, Button, Heder } from "../Style";

export default function ImageFinder() {
  return (
    <>
      <Container>
        <Image src={ImageFinderImg} alt="ImageFinderImg" />
        <ContainerLink>
          <Button>
            <Link
              href="https://anasty223.github.io/goit-react-hw-04-hooks-images_42/"
              target="_blanc"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>React basic. RestApi. Hooks.</Heder>
      </Container>
    </>
  );
}
