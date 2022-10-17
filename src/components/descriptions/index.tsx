import React from "react";
import { Group, Description, Container } from "library-caiol.sousa";

import { Heading } from "../heading";

import * as I from "./interface";
import * as C from "./content";

export const Descriptions = ({ history, passive }: I.DescriptionsProps) => (
  <Container gap={[30, 30]} direction="column">
    <Group direction="column" gap={[10, 10]}>
      <Heading title="História" />
      <Description text={history} />
    </Group>

    <Group gap={[10, 10]} direction="column">
      {passive.map((passives, i) => (
        <>
          <h3>{C.titles[i]}</h3>
          <Description text={passives} key={passives} />
        </>
      ))}
    </Group>
  </Container>
);
