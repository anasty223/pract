import WebStudioImg from "../../Images/WebStudio.jpg";
import { Image, Container, Link, ContainerLink, Button, Heder } from "../Style";

export default function WebStudio() {
  return (
    <>
      <Container>
        <Image src={WebStudioImg} alt="WebStudio" />
        <ContainerLink>
          <Button>
            <Link
              href="https://anasty223.github.io/goit-markup-hw-08/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
          Basics of HTML, CSS Block model. Flexbox decorative elements, vector
          graphics.Positioning of elements. Transitions and animations.Marking
          of forms and stylization. BEM methodology. Adaptive layout. Adaptive
          graphics.
        </Heder>
      </Container>
    </>
  );
}
