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
  ContainerTablet,
  ContainerLang,
  ContainerFlex,
  ContainerCon,
  ItemLang,
} from "./HomePage.style";
import { AiFillLinkedin, AiTwotoneMail, AiFillGithub } from "react-icons/ai";
import { BsTelephoneFill, BsTelegram } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <CardWrapper>
        <ContainerTablet>
          <Image src={AnastasyaTrunova} alt="photo" />
          <Letter>
            I am a Junior Front-End developer. I focus on HTML5, CSS3, JS,
            React. Looking for a remote job. Development, practice and work for
            the result are important for me. I intend to develop innovative
            technologies and deliver value to people.
          </Letter>
        </ContainerTablet>
        <ContainerAditional>
          <ContainerLang>
            <List>
            


              <Header>Language skills</Header>
              <ItemLang>
                <HeaderLang>English:</HeaderLang> Pre-intermediate(A2)
              </ItemLang>
              <ItemLang>
                <HeaderLang>French:</HeaderLang> Advanced(C1-C2)
              </ItemLang>
              <ItemLang>
                <HeaderLang>Ukrainian:</HeaderLang> native
              </ItemLang>
            </List>
            <ContainerCon>
              <Header>CONTACT INFORMATION</Header>
              <p> (Viber, Telegram, WhatsApp)</p>
              <ListContact>
                <ContainerFlex>
                  <ListContacts>
                    <BsTelephoneFill />
                    <Contacts href="tel:+380937657086">
                      +38(093)765 70 86
                    </Contacts>
                  </ListContacts>
                  <ListContacts>
                    <AiTwotoneMail />
                    <Contacts href="mailto:anasty22@gmail.com">
                      anasty22@gmail.com
                    </Contacts>
                  </ListContacts>
                </ContainerFlex>
                <ContainerFlex>
                  <ListContacts>
                    <AiFillLinkedin />
                    <Contacts href="www.linkedin.com/in/anasty223">
                      LinkedIn
                    </Contacts>
                  </ListContacts>
                  <ListContacts>
                    <BsTelegram />
                    <Contacts href="https://t.me/anasty223">Telegram</Contacts>
                  </ListContacts>
                  <ListContacts>
                    <AiFillGithub />
                    <Contacts href="https://github.com/anasty223">
                      GitHub
                    </Contacts>
                  </ListContacts>
                </ContainerFlex>
              </ListContact>
            </ContainerCon>
          </ContainerLang>

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
