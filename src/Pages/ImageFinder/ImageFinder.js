import mouvies_ads from "../../Images/mouvies_ads.jpg";
import mouvies_ads2 from "../../Images/mouvies_ads2.jpg";
import mouvies_ads3 from "../../Images/mouvies_ads3.jpg";
import { Image, Container, Link, ContainerLink, Button, Heder, ContainerImg } from "../Style";

export default function ImageFinder() {
  return (
    <>
      <Container>
      <ContainerImg>
      <div className="containerImg"> 
        <Image src={mouvies_ads} alt="ImageFinderImg" />
        <Image src={mouvies_ads2} alt="ImageFinderImg" />
        <Image src={mouvies_ads3} alt="ImageFinderImg" />
</div>
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://anasty223.github.io/justice_league_html-css/"
              target="_blanc"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>HTML/CSS, Positions, Grid, Flex, Gradients</Heder>
      </Container>
    </>
  );
}
