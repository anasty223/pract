import { Container, List, Item ,Item_P} from "./Education.style";

const Education = () => {
  return (
    <>
      <Container>
        <List>
          <Item>
            IT School GoIT (Kyiv).Full Stack Developer GoIT 06/2021 -09/2022
            <ol>
              <li>HTML/CSS/SASS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            </ol>
          </Item>
          <Item>
            Marketing Intégré Internet. Tripmydream Academy 09/2020 - 01/ 2021
          <ol><li>Принцип работы Google Analytics</li>
   
          <li>Facebook Pixel
</li>
<li>Визуализация и анализ данных в Google Data Studio</li>
<li>CRO</li>
<li>Установка и настройка Google Optimize
Настройка Hotjar</li>
<li>SMM</li>
<li>Facebook & Instagram</li>
<li>Facebook Ads
</li>
<li>SEO</li>
<li>Email-marketing</li></ol>
          </Item>
           <Item>
            Kyiv Pedagogical University 2006 - 2010 Professor of French and
            Literary Etranger.
          </Item>
        </List>
      </Container>
    </>
  );
};

export default Education;
