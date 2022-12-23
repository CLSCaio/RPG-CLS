import { ReactNode } from "react";
import Head from "next/head";

import { GlobalStyle, Main, Header } from "library-caiol.sousa";

import routes from "./routes";

interface RootProps {
  children: ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <>
    <Header
      routes={routes}
      link={{ type: "next", variant: "doubleLine" }}
      title="RPG-CLS"
      bgColor="white"
    />
    <Head>
      <title>RPG-CLS</title>
    </Head>
    <Main withPad>{children}</Main>

    <GlobalStyle />
  </>
);
