import { CardPublicacao } from "./components/CardPublicacao";
import { CardHeaderNoticia } from "./components/CardHeaderNoticia";
import { ContainerPost, ContainerPublicacao, ContentPost } from "./styles";

export function Post() {
  return (
    <ContainerPost>
      <ContentPost>
        <CardHeaderNoticia />
        <ContainerPublicacao>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            suscipit. Rem quisquam pariatur vitae ipsum aliquid officiis nihil
            voluptates sint, explicabo non labore aut id. Quisquam temporibus
            iste dolorem delectus!
          </p>
        </ContainerPublicacao>
      </ContentPost>
    </ContainerPost>
  );
}
