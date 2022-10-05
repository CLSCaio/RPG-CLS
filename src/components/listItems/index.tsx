import React from "react";
import { Group, Accordion, Description, Container } from "library-caiol.sousa";

import styled from "styled-components";
import { Heading } from "../heading";

import * as I from "./interface";
import { Status } from "../status";

export const ListItems = ({
  abilidades,
  subClasses,
  status,
  lvl,
  title,
  history,
  id,
}: I.ListItemsProps) => (
  <Group direction="column" gap={[20, 20]}>
    <Group direction="column" gap={[5, 5]}>
      <Heading title="" subTitle={title} />
      <Description text={`&nbsp; &nbsp;${history}`} />
    </Group>
    <Container mobileResponsive gap={[10, 10]} align="flex-start">
      <Accordion
        maxW={440}
        list={[
          {
            title: "Abilidades",
            id: `abilidades-${id}`,
            children: <Accordion list={abilidades} />,
          },
        ]}
      />

      <Accordion
        maxW={440}
        list={[
          {
            title: "Sub-Classes",
            id: `subClasses-${id}`,
            children: <Accordion list={subClasses} />,
          },
        ]}
      />

      <Accordion
        maxW={250}
        list={[
          {
            title: "Status",
            id: `status-${id}`,
            children: <Status status={status} lvl={lvl} />,
          },
        ]}
      />
    </Container>
  </Group>
);
