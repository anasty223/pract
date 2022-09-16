import { Image, Container, Link, ContainerLink, Button, Heder } from "../Style";
import PhonebookImg from "../../Images/PhoneBook.jpg";
export default function Phonebook() {
  return (
    <>
      <Container>
        <Image src={PhonebookImg} alt="PhonebookImg" />
        <ContainerLink>
          <Button>
            <Link
              href="https://anasty223.github.io/goit-react-hw-08-phonebook_42/"
              target="_blanc"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
          React-router-dom,react-hooks,propsTypes,react-bootstrap,styled-components,react-redux,reduxjs/toolkit
        </Heder>
      </Container>
    </>
  );
}
