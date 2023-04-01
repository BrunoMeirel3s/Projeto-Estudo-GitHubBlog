import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import {
  ContainerGithubInfos,
  ContainerLinks,
  ContainerUserInfos,
  ConteinerHeaderNoticia,
} from "./styles";
import { parseISO, formatDistance, isDate, isValid } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

interface CardHeaderNoticiaProps {
  created_at: string;
  html_url: string;
  title: string;
  comments: number;
  login: string;
}

export function CardHeaderNoticia({
  created_at = new Date().toDateString(),
  html_url,
  title,
  comments,
  login,
}: CardHeaderNoticiaProps) {
  const firstDate = parseISO(created_at);
  console.log(firstDate);
  let distance;

  if (isValid(firstDate)) {
    distance = formatDistance(firstDate, new Date(), {
      locale: ptBr,
    });
  }

  return (
    <ConteinerHeaderNoticia>
      <ContainerLinks>
        <div>
          <a href="/">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#3294F8" }}
              width={14}
            ></FontAwesomeIcon>
            <span>VOLTAR</span>
          </a>
        </div>
        <div>
          <a href={html_url} target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#3294F8" }}
              width={14}
            ></FontAwesomeIcon>
          </a>
        </div>
      </ContainerLinks>
      <ContainerUserInfos>
        <h1>
          {" "}
          <p>{title}</p>
        </h1>
      </ContainerUserInfos>
      <ContainerGithubInfos>
        <div>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#3A536B" }} />
          <span>{login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} style={{ color: "#3A536B" }} />
          <span>Há {distance}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} style={{ color: "#3A536B" }} />
          <span>{comments} comentários</span>
        </div>
      </ContainerGithubInfos>
    </ConteinerHeaderNoticia>
  );
}
