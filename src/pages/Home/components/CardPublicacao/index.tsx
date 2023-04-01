import { ContainerCardPublicacao, Content, Header } from "./styles";
import { parseISO, formatDistance } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

interface CardPublicacaoProps {
  id: string;
  title: string;
  date: string;
  body: string;
  number: number;
}

export function CardPublicacao({
  title,
  id,
  date,
  body,
  number,
}: CardPublicacaoProps) {
  const firstDate = parseISO(date);
  const distance = formatDistance(firstDate, new Date(), {
    locale: ptBr,
  });
  return (
    <ContainerCardPublicacao>
      <a href={`/post/${number}`}>
        <Header>
          <div>
            <h3>{title}</h3>
          </div>
          <span>Há {distance}</span>
        </Header>
        <Content>
          <p>
            {body?.substring(0, 255)}
            {"..."}
          </p>
        </Content>
      </a>
    </ContainerCardPublicacao>
  );
}
