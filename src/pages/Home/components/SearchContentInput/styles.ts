import styled from "styled-components";
export const ContainerSearchContentInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 4.5rem;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const ContainerInput = styled.form`
  input {
    width: 100%;
    height: 3.2rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background: ${(props) => props.theme["base-input"]};
    padding: 1rem;
    color: ${(props) => props.theme["base-text"]};
  }

  input:focus {
    border: 1px solid ${(props) => props.theme["blue"]};
    outline: none;
  }
`;
