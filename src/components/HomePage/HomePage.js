import { Outlet, NavLink } from "react-router-dom";
import AnastasyaTrunova from "../../Images/AnastasyaTrunova.jpg";
import {
  Image,
  Container,
  Letter,
  ContainerAditional,
  CardWrapper,
  Header,
} from "./HomePage.style";

const HomePage = () => {
  return (
    <>
      <CardWrapper>
        <Image src={AnastasyaTrunova} alt="photo" />

        <Letter>
          I am a Junior Front-End developer. I focus on HTML5, CSS3, JS, React.
          Looking for a remote job. Development, practice and work for the
          result are important for me. I intend to develop innovative
          technologies and deliver value to people.
        </Letter>
        <ContainerAditional>
          <ul>
            <Header>Language skills</Header>
            <li>English: A2</li>
            <li>French: C1-C2</li>
            <li>Ukrainian: native</li>
          </ul>

          <Header>CONTACT INFORMATION</Header>
          <p>
            <ul>
              <li>
                <a href="tel:+380937657086">+38(093)765 70 86</a>
                (Viber, Telegram, WhatsApp)
              </li>
              <li>
                {" "}
                <a href="mailto:anasty22@gmail.com">anasty22@gmail.com</a>
              </li>
              <li>
                <a href="www.linkedin.com/in/anasty223">LinkedIn</a>
              </li>
              <li>
                <a href="https://t.me/anasty223">Telegram</a>
              </li>
            </ul>
          </p>

          <Header>Additional information</Header>
          <ul>
            <li>
              <NavLink to="tech">TECH SKILLS</NavLink>
            </li>
            <li>
              <NavLink to="soft">SOFT SKILLS</NavLink>
            </li>
          </ul>
        </ContainerAditional>

        <Outlet />
      </CardWrapper>
    </>
  );
};

export default HomePage;
