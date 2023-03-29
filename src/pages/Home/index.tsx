import { CardPublicacao } from "./components/CardPublicacao";
import { CardUsuario } from "./components/CardUsuario";
import { SearchContentInput } from "./components/SearchContentInput";
import { ContainerHome, ContainerPublicacoes, ContentHome } from "./styles";

export function Home() {
  return (
    <ContainerHome>
      <ContentHome>
        <CardUsuario />
        <SearchContentInput />
        <ContainerPublicacoes>
          <CardPublicacao />
          <CardPublicacao />
          <CardPublicacao />
          <CardPublicacao />
          <CardPublicacao />
          <CardPublicacao />
        </ContainerPublicacoes>
      </ContentHome>
    </ContainerHome>
  );
}
