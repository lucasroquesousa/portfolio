import UncontrolledExample from "../../components/slideCarrousell/Carrousell";

import Sobre from "../sobre/Sobre";
import { Container } from "./style.module";

const Home = () => {
  return (
    <Container>
      <section>
        <div>
          <UncontrolledExample />
        </div>

        <div>
          <p style={{ color: "white" }}>Sobre</p>]
          <Sobre />
        </div>
      </section>
    </Container>
  );
};

export default Home;
