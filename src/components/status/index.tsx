import React from "react";
import { Group, Description } from "library-caiol.sousa";

import styled from "styled-components";
import * as I from "./interface";

const CDescription = styled(Description)`
  max-width: max-content;
`;

export const Status = ({ status, lvl }: I.StatusProps) => (
  <Group direction="column">
    <Group justify="space-between">
      <CDescription text="<b>BASE</b>" />
      <CDescription text="<b>P/LVL</b>" />
    </Group>
    <hr />
    <br />
    <Group justify="space-between">
      <CDescription text={`<b>HP: </b>${status.hp}/${status.hp}`} />
      <CDescription text={`+ ${lvl.hp}`} />
    </Group>
    <Group justify="space-between">
      <CDescription text={`<b>Mana: </b>${status.mana}/${status.mana}`} />
      <CDescription text={`+ ${lvl.mana}`} />
    </Group>
    <CDescription text={`<b>Carga: </b>${status.carga}/10`} />

    <br />
    <Group justify="space-between">
      <CDescription text={`<b>ATK: </b>${status.atk}`} />
      <CDescription text={`+ ${lvl.atk}`} />
    </Group>

    <Group justify="space-between">
      <CDescription text={`<b>SP.ATK: </b>${status.spAtk}`} />
      <CDescription text={`+ ${lvl.spAtk}`} />
    </Group>

    <Group justify="space-between">
      <CDescription text={`<b>DEF: </b>${status.def}`} />
      <CDescription text={`+ ${lvl.def}`} />
    </Group>

    <Group justify="space-between">
      <CDescription text={`<b>SP.DEF: </b>${status.spDef}`} />
      <CDescription text={`+ ${lvl.spDef}`} />
    </Group>

    <Group justify="space-between">
      <CDescription text={`<b>DEX: </b>${status.dex}`} />
      <CDescription text={`+ ${lvl.dex}`} />
    </Group>

    <Group justify="space-between">
      <CDescription text={`<b>VEL: </b>${status.vel}`} />
      <CDescription text={`+ ${lvl.vel}`} />
    </Group>
  </Group>
);
