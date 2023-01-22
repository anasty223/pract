import {
  Image,
  Container,
  Link,
  ContainerLink,
  Heder,
  ContainerImg,
  Button,
} from "../Style";
import ShoppingCartAp from "../../Images/ShoppingCartApp.jpg";
import ShoppingCartAp2 from "../../Images/ShoppingCartApp2.jpg";
import ShoppingCartAp3 from "../../Images/ShoppingCartApp3.jpg";
export default function ShoppingCartApp() {
  return (
    <>
      <Container>  <Heder>
          Description: Product card application.
          </Heder>
        <ContainerImg>
        <div className="containerImg"> 
          <Image src={ShoppingCartAp} alt="watch 1" />
          <Image src={ShoppingCartAp2} alt="watch 2" />
          <Image src={ShoppingCartAp3} alt="watch 3" />
          </div>
        </ContainerImg>
        <ContainerLink>
          <Button>
            <Link
              href="https://shopping-cart-app-mocha.vercel.app/"
              target="_blank"
            >
              Link to site
            </Link>
          </Button>
        </ContainerLink>
        <Heder>
        Technologies:Typescript, react, createContext, ReactElement, useMemo, useReducer,hooks, memo. 
        </Heder>
      </Container>
    </>
  );
}
