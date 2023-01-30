import IceCreamImage from "../../Images/IceCreamImage.jpg";
import {
  Image,
  Container,
  Link,
  ContainerLink,
  ContainerImg,
  Heder,
  Button,
} from "../Style";
export default function IceCream() {
  return (
    <>
      <Container> <Heder> Ice Cream company site</Heder>
        <ContainerImg>
         
          <Image src={IceCreamImage} alt="IceCreamImage" />
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://sokorevvvladimir.github.io/team-project9/"
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
