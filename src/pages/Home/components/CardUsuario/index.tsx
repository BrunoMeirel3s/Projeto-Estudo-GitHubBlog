import {
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
      </ContainerUserInfos>
    </ConteinerCardUsuario>
  );
}
