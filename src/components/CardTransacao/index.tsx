import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./style";

interface Category {
  name: String;
  icon: string;
}

export interface CardTransacaoProps {
  data: {
    type: "positive" | "negative";
    titulo: string;
    amount: string;
    category: Category;
    date: string;
  };
}

export function CardTransacao({ data }: CardTransacaoProps) {
  return (
    <Container>
      <Title>{data.titulo}</Title>
      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
