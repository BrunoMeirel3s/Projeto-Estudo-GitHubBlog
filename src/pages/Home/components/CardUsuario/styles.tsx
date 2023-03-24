import styled from "styled-components";

export const ConteinerCardUsuario = styled.div`
  width: 100%;
  height: 13rem;
  background: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem;
  margin-top: -5.5rem;
  filter: drop-shadow(0px 2px 28px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: row;
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
