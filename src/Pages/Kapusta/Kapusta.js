import {
  Image,
  Container,
  Link,
  ContainerLink,
  Button,
  ContainerImg,
  Heder,
} from "../Style";
import KapustaImg from "../../Images/Kapusta.jpg";
import kapusta2 from "../../Images/kapusta2.jpg";
import kapusta3 from "../../Images/kapusta3.jpg";

export default function Phonebook() {
  return (
    <>
      <Container>
        <Heder>
     
          Description: Application for calculating own expenses and incomes
        </Heder>

        <ContainerImg >
          <div className="containerImg">
            <Image src={KapustaImg} alt="KapustaImg" />
            <Image src={kapusta2} alt="KapustaImg" />
            <Image src={kapusta3} alt="KapustaImg" />
          </div>
        </ContainerImg>

        <ContainerLink>
          <Button>
            <Link href="https://kapustaapp.netlify.app/" target="_blanc">
              Link to site
            </Link>
          </Button>
        </ContainerLink>
     

 
        <Heder>
        <div style={{marginBottom:20}}>  Technologies:</div>
      <ul className="listOfTicTac">
        <li>Redux.js/toolkit</li>
        <li>React/Javascript Logic</li>
        <li>Axios,PropTypes </li>
    
      </ul>
</Heder>

<p>
          In this collective project, my task was to make Logout logic and
          styling logout. Position all backgrounds and markup the site. Stylize and position the registration page. I also
          marked the Summary section. Adaptive layout and styling of inputs
          description. 
Preparation of all svg for the project. Add notifications in projects.
        </p>
      </Container>
    </>
  );
}
