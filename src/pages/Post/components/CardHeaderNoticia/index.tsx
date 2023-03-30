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

export function CardHeaderNoticia() {
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
          <a href="https://github.com/brunomeirel3s" target="_blank">
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
          <p>Javascript data types and data structures</p>
        </h1>
      </ContainerUserInfos>
      <ContainerGithubInfos>
        <div>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#3A536B" }} />
          <span>brunomeirel3s</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} style={{ color: "#3A536B" }} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} style={{ color: "#3A536B" }} />
          <span>5 comentários</span>
        </div>
      </ContainerGithubInfos>
    </ConteinerHeaderNoticia>
  );
}
