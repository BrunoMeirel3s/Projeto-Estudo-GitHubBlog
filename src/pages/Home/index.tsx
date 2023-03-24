import { CardUsuario } from "./components/CardUsuario";
import { ContainerHome, ContentHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContentHome>
        <CardUsuario />
      </ContentHome>
    </ContainerHome>
  );
}
