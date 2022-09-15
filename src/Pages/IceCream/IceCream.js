import IceCreamImage from "../../Images/IceCreamImage.jpg";
import { Image, Container, Link, ContainerLink } from "../Style";
export default function IceCream() {
  return (
    <>
      <Container>
        <h3> Ice Cream company site</h3>
        <Image src={IceCreamImage} alt="IceCreamImage" />
        <ContainerLink>
          <button>
            <Link
              href="https://sokorevvvladimir.github.io/team-project9/"
              target="_blank"
            >
              Link to site
            </Link>
          </button>
        </ContainerLink>
        <h3>
          Basics of HTML, CSS Block model. Flexbox decorative elements, vector
          graphics.Positioning of elements. Transitions and animations.Marking
          of forms and stylization. BEM methodology. Adaptive layout. Adaptive
          graphics.
        </h3>
      </Container>
    </>
  );
}
