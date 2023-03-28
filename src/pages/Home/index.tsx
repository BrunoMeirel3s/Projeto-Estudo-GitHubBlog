import { CardUsuario } from "./components/CardUsuario";
import { SearchContentInput } from "./components/SearchContentInput";
import { ContainerHome, ContentHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContentHome>
        <CardUsuario />
        <SearchContentInput />
      </ContentHome>
    </ContainerHome>
  );
}
