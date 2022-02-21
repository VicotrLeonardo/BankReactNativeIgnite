import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransacao,
} from "./styles";

interface Props {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransacao: string;
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function CardDestaque({ type, title, amount, lastTransacao }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransacao type={type}>{lastTransacao}</LastTransacao>
      </Footer>
    </Container>
  );
}
