import styled from "styled-components";
export const ContainerCardPublicacao = styled.div`
  padding: 1rem;
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 1.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  div {
    flex: 1;
  }

  span {
    position: relative;
  }
`;
export const Content = styled.div`
  margin-top: 1.5rem;
  color: ${(props) => props.theme["base-text"]};
`;
