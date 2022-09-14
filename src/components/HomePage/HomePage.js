import { Outlet, NavLink } from "react-router-dom";
import AnastasyaTrunova from "../../Images/AnastasyaTrunova.jpg";
import {
  Image,
  Letter,
  ContainerAditional,
  Header,
  CardWrapper,
  List,
  HeaderLang,
  Contacts,
  ListContacts,
  ListContact,
  Linktech,
  ItemTech,
  ListAdditional,
} from "./HomePage.style";
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import { BsTelephoneFill, BsTelegram } from "react-icons/bs";

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
          <List>
            <Header>Language skills</Header>
            <li>
              <HeaderLang>English:</HeaderLang> A2
            </li>
            <li>
              <HeaderLang>French:</HeaderLang> C1-C2
            </li>
            <li>
              <HeaderLang>Ukrainian:</HeaderLang> native
            </li>
          </List>

          <Header>CONTACT INFORMATION</Header>
          <p> (Viber, Telegram, WhatsApp)</p>
          <ListContact>
            <ListContacts>
              <BsTelephoneFill />
              <Contacts href="tel:+380937657086">+38(093)765 70 86</Contacts>
            </ListContacts>
            <ListContacts>
              <AiTwotoneMail />
              <Contacts href="mailto:anasty22@gmail.com">
                anasty22@gmail.com
              </Contacts>
            </ListContacts>
            <ListContacts>
              <AiFillLinkedin />
              <Contacts href="www.linkedin.com/in/anasty223">LinkedIn</Contacts>
            </ListContacts>
            <ListContacts>
              <BsTelegram />
              <Contacts href="https://t.me/anasty223">Telegram</Contacts>
            </ListContacts>
            <ListContacts>
              <AiFillGithub />
              <Contacts href="https://github.com/anasty223">GitHub</Contacts>
            </ListContacts>
          </ListContact>

          <Header>Additional information</Header>
          <ListAdditional>
            <ItemTech>
              <Linktech to="tech">TECH SKILLS</Linktech>
            </ItemTech>
            <ItemTech>
              <Linktech to="soft">SOFT SKILLS</Linktech>
            </ItemTech>
            <Outlet />
          </ListAdditional>
        </ContainerAditional>
      </CardWrapper>
    </>
  );
};

export default HomePage;
