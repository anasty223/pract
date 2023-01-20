import { Image, Container, Link, ContainerLink, Button, Heder } from "../Style";
import MouviesImg from "../../Images/Mouvies.jpg";
import mouvie_2 from "../../Images/Mouvies_2.jpg";
import ImageFinderImg from "../../Images/ImageFinder.jpg";
export default function Mouvies() {
  return (
    <>
      <Container>
        <h3>Movie search site:</h3>
    <Image src={MouviesImg} alt="MouviesImg" />
        <ContainerLink>
          <Button>
            <Link
              href="https://homeworkfivegrouptwotrounova.netlify.app/"
              target="_blanc"
            >

              Link to site
            </Link>
           
          </Button>
          <h3>Article search site:</h3>
          <Image src={mouvie_2} alt="MouviesImg" />
          <Button>
            <Link
              href="https://post-singlepage.vercel.app/article"
              target="_blanc"
            >

              Link to site
            </Link>
           
          </Button>
          <h3>Images search site:</h3>
          <Image src={ImageFinderImg} alt="ImageFinderImg" />
       
          <Button>
            <Link
              href="https://goit-react-hw-04-hooks-images-42.vercel.app/"
              target="_blanc"
            >
              Link to site
            </Link>
          </Button>

        </ContainerLink>
        <Heder>
          React Router and code splitting. Redux basics. Redux
          Toolkit.RestApi,Search Filter in React JS with Search Bar
          React Hooks: UseState, UseEffect, State Management, 
          Material Ui
        </Heder>
      </Container>
    </>
  );
}
