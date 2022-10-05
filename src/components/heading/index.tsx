import React from "react";
import { Group } from "library-caiol.sousa";

import * as I from "./interface";
import * as S from "./styles";

export const Heading = ({ title, subTitle }: I.HeadingProps) => (
  <Group maxW="max-content">
    <S.Title> {title} </S.Title>
    <S.SubTitle> {subTitle} </S.SubTitle>
  </Group>
);
