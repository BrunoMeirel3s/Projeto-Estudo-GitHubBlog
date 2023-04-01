import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  ContainerGithubInfos,
  ContainerUserInfos,
  ContainerUserPhoto,
  ConteinerCardUsuario,
  GithubLink,
} from "./styles";

interface CardUsuarioProps {
  login: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
  avatar_url: string;
}

export function CardUsuario({
  login,
  html_url,
  name,
  company,
  bio,
  followers,
  avatar_url,
}: CardUsuarioProps) {
  return (
    <ConteinerCardUsuario>
      <ContainerUserPhoto>
        <img src={avatar_url} alt="" width={148} />
      </ContainerUserPhoto>
      <ContainerUserInfos>
        <h1>{name}</h1>
        <p>{bio}</p>
        <ContainerGithubInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#3A536B" }} />
            <span>{login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} style={{ color: "#3A536B" }} />
            <span>{company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#3A536B" }} />
            <span>{followers} seguidores</span>
          </div>
        </ContainerGithubInfos>
      </ContainerUserInfos>
      <GithubLink>
        <a href={html_url} target="_blank">
          <span>GITHUB</span>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#3294F8" }}
            width={14}
          ></FontAwesomeIcon>
        </a>
      </GithubLink>
    </ConteinerCardUsuario>
  );
}
