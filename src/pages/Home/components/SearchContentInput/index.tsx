import {
  ContainerHeader,
  ContainerInput,
  ContainerSearchContentInput,
} from "./styles";

interface SearchContentInputProps {
  searchPublish: (text: string) => void;
  publishAmout: number;
}

export function SearchContentInput({
  searchPublish,
  publishAmout,
}: SearchContentInputProps) {
  return (
    <ContainerSearchContentInput>
      <ContainerHeader>
        <h3>Publicações</h3>
        <span>{publishAmout} publicações</span>
      </ContainerHeader>
      <ContainerInput>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => searchPublish(e.target.value)}
        />
      </ContainerInput>
    </ContainerSearchContentInput>
  );
}
