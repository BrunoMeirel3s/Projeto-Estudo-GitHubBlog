import { ContainerCardPublicacao, Content, Header } from "./styles";

export function CardPublicacao() {
  return (
    <ContainerCardPublicacao>
      <a href="https://www.google.com" target="_blank">
        <Header>
          <div>
            <h3>Javascrip data types and data structures</h3>
          </div>
          <span>Há 1 dia</span>
        </Header>
        <Content>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            quaerat esse atque illo incidunt asperiores ut eius nemo dolorum
            tempora odio, sit reiciendis expedita nulla quia iure sequi vitae.
            Dolores?
          </p>
        </Content>
      </a>
    </ContainerCardPublicacao>
  );
}
