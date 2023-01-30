import {
  Image,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import social from "../../Images/social.jpg";
export default function SocialMedia() {
  return (
    <>
      <Container>  <Heder>
          Web application with posts list
          </Heder>
        <ContainerImg>
        
          <Image src={social} alt="social" />
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://social-media-project-trunova.netlify.app/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
           React-router-dom,react-hooks ,styled-components,firebase, react-hook-form, yup, typescript 
        </Heder>
      </Container>
    </>
  );
}
