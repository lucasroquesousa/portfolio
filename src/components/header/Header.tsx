import React from "react";
import logotipo from "../../assets/img/logo.png";
import { Container } from "./styles";
const Header = () => {
  return (
    <Container>
      <img className="logo" src={logotipo} alt="" />
      <ul className="ul-header">
        <li className="li-header">Sobre</li>
        <li className="li-header">Técnologias do dia a dia</li>
        <li className="li-header">Meus Projetos</li>
        <li className="li-header">Meus Contatos</li>
      </ul>
    </Container>
  );
};

export default Header;
