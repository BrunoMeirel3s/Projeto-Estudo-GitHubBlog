import { Outlet } from "react-router-dom";
import { ContainerLayout } from "./styles";

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <Outlet />
    </ContainerLayout>
  );
}
