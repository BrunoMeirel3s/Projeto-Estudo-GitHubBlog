import styled from "styled-components";

export const ConteinerHeaderNoticia = styled.div`
  width: 100%;
  height: 13.5rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    a {
      text-decoration: none;
      color: ${(props) => props.theme["blue"]};
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid transparent;
    }

    a:hover {
      border-bottom: 1px solid ${(props) => props.theme["blue"]};
    }
  }
`;
export const ContainerUserInfos = styled.div``;

export const ContainerGithubInfos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`;
