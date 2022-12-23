import React from "react";
import { Container, Accordion, Group } from "library-caiol.sousa";

import { Heading } from "../../components";
import { classes, racas } from "../../database";

const classes_racas = () => (
  <Container direction="column" gap={[40, 20]}>
    <Group gap={[20, 20]} direction="column" align="center">
      <Heading title="Raças" />
      <Accordion
        list={racas}
        icon="arrow"
        variant="default"
        colors={["#fff", "#eff"]}
      />
    </Group>

    <Group gap={[20, 20]} direction="column" align="center">
      <Heading title="Classes" />
      <Accordion
        list={classes}
        icon="arrow"
        variant="default"
        colors={["#fff", "#eff"]}
      />
    </Group>
  </Container>
);

export default classes_racas;
