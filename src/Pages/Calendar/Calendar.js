import {
  Image,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import calendar from "../../Images/calendar.jpg";
import calendar2 from "../../Images/calendar2.jpg";
import calendar3 from "../../Images/calendar3.jpg";
export default function Calendar() {
  return (
    <>
      <Container>
   
          <Heder>
          Description: 
A calendar application with the ability to save notes
          </Heder>


          <ContainerImg>
          <div className="containerImg"> 
          <Image src={calendar} alt="calendar app" />
          <Image src={calendar2} alt="calendar app" />
          <Image src={calendar3} alt="calendar app" />
          </div>
        </ContainerImg>

        <ContainerLink>
          <Button>
            <Link
              href="https://calendar-react-three.vercel.app/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
        Technologies: tailwind, Date, useEffect, useReducer, useState,useContext
        </Heder>
      </Container>
    </>
  );
}
