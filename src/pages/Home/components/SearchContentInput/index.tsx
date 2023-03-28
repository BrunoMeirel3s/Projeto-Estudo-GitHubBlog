import {
  ContainerHeader,
  ContainerInput,
  ContainerSearchContentInput,
} from "./styles";

export function SearchContentInput() {
  return (
    <ContainerSearchContentInput>
      <ContainerHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </ContainerHeader>
      <ContainerInput>
        <input type="text" placeholder="Buscar conteúdo" />
      </ContainerInput>
    </ContainerSearchContentInput>
  );
}
