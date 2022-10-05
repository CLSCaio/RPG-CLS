import React from "react";
import { Container, Accordion } from "library-caiol.sousa";

import { Heading } from "../../components";

import * as C from "./content";

export const Home = () => (
  <Container direction="column" justify="center" gap={[20, 20]}>
    <Heading title="Classes" />
    <Accordion list={C.classes} icon="arrow" variant="default" />
  </Container>
);
