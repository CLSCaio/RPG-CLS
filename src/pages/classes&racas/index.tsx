import React from "react";
import { Container, Accordion } from "library-caiol.sousa";

import { Heading } from "../../components";
import { classes } from "../../database";

const classes_racas = () => (
  <Container direction="column" justify="center" gap={[20, 20]}>
    <Heading title="Classes" />
    <Accordion list={classes} icon="arrow" variant="default" />
  </Container>
);

export default classes_racas;
