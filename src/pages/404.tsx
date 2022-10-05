import React from "react";
import { Link } from "library-caiol.sousa";

const NotFound = () => (
  <h1>
    Tela não encontrada <br />
    <Link
      href={{ defautlLink: "/" }}
      type="next"
      variant="underline"
      label="clique aqui"
    />
    para voltar a hom
  </h1>
);

export default NotFound;
