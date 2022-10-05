import { ReactNode } from "react";
import { GlobalStyle, Main, Header } from "library-caiol.sousa";

import { StoreUserProvider } from "../../modules";

import routes from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <StoreUserProvider>
    <Header
      routes={routes}
      link={{ type: "next", variant: "doubleLine" }}
      title="RPG-CLS"
      bgColor="white"
    />
    <Main withPad>{children}</Main>

    <GlobalStyle />
  </StoreUserProvider>
);
