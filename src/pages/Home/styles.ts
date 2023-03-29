import styled from "styled-components";

export const ContainerHome = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentHome = styled.main`
  width: 864px;
`;

export const ContainerPublicacoes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  row-gap: 2rem;
  margin-top: 3.25rem;
  margin-bottom: 3.25rem;
`;
