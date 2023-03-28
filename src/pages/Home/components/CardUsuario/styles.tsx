import styled from "styled-components";

export const ConteinerCardUsuario = styled.div`
  width: 100%;
  height: 13.5rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const ContainerUserPhoto = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 148px;
  height: 148px;
`;
export const ContainerUserInfos = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
`;

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

export const GithubLink = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme["blue"]};
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }

  a:hover {
    border-bottom: 1px solid ${(props) => props.theme["blue"]};
  }
`;
