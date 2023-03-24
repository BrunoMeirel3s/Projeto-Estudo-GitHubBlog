import { ContainerHeader } from "./styles";
import imgEffectLeft from "../../assets/effect-left.svg";
import imgEffectRight from "../../assets/effect-right.svg";
import imgLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <ContainerHeader>
      <img src={imgEffectLeft} alt="" />
      <img src={imgLogo} alt="" style={{ marginTop: "-3rem" }} />
      <img src={imgEffectRight} alt="" />
    </ContainerHeader>
  );
}
