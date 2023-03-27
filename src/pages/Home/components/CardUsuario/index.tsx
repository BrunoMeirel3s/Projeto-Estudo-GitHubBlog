import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerGithubInfos,
  ContainerUserInfos,
  ContainerUserPhoto,
  ConteinerCardUsuario,
} from "./styles";

export function CardUsuario() {
  return (
    <ConteinerCardUsuario>
      <ContainerUserPhoto>
        <img src="https://github.com/brunoMeirel3s.png" alt="" width={148} />
      </ContainerUserPhoto>
      <ContainerUserInfos>
        <h1>Bruno Meireles</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          consectetur totam nostrum iste voluptas ut sunt minima nihil, error
          assumenda molestias veniam esse optio mollitia sapiente nobis libero.
          Laborum, minus.
        </p>
        <ContainerGithubInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} style={{ color: "#3A536B" }} />
            <span>brunomeirel3s</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} style={{ color: "#3A536B" }} />
            <span>Unimed Belém</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} style={{ color: "#3A536B" }} />
            <span>2 seguidores</span>
          </div>
        </ContainerGithubInfos>
      </ContainerUserInfos>
    </ConteinerCardUsuario>
  );
}
