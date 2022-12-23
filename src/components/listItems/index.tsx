import React from "react";
import { Group, Accordion, Container } from "library-caiol.sousa";

import { Heading } from "../heading";

import * as I from "./interface";
import { Status } from "../status";

export const ListItems = ({
  skills,
  subClasses,
  status,
  lvl,
}: I.ListItemsProps) => (
  <Container mobileResponsive gap={[30, 30]} align="flex-start">
    <Group direction="column" gap={[10, 10]}>
      <Heading title="Skills" />
      <Accordion
        list={skills}
        variant="inline"
        colors={[undefined, undefined, "#00f"]}
      />
    </Group>

    <Group direction="column" gap={[10, 10]}>
      <Heading title="Sub-Classes" />
      <Accordion
        list={subClasses}
        variant="onlyBg"
        colors={[undefined, undefined, "#00f"]}
      />
    </Group>

    <Group maxW={250} direction="column" gap={[10, 10]}>
      <Heading title="Status" />
      <Status status={status} lvl={lvl} />
    </Group>
  </Container>
);
