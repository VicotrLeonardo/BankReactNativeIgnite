import React from "react";
import { CardDestaque } from "../../components/CardDestaque";
import { CardTransacao, CardProps } from "../../components/CardTransacao";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  CardsDestaque,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends CardProps {
  id: string;
}
export function Dashboard() {
  const data = [
    {
      id: "1",
      type: "positive",
      titulo: "Desenvolvimento de Site",
      amount: "R$ 15600.00",
      date: "19/02/22",
      category: { name: "Vendas", icon: "dollar-sign" },
    },
    {
      id: "2",
      type: "negative",
      titulo: "Aluguel",
      amount: "R$ 500.00",
      date: "19/02/22",
      category: { name: "Casa", icon: "dollar-sign" },
    },
    {
      id: "3",
      type: "negative",
      titulo: "Pizza",
      amount: "R$ 84.00",
      date: "19/02/22",
      category: { name: "Alimentação", icon: "coffee" },
    },
  ];
  return (
    <>
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo
                source={{ uri: "https://github.com/VicotrLeonardo.png" }}
              />
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserName>Victor</UserName>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
        </Header>

        <CardsDestaque>
          <CardDestaque
            type="up"
            title="Entradas"
            amount="R$ 17.500,00"
            lastTransacao="Última entrada dia 13 de janeiro"
          />
          <CardDestaque
            type="down"
            title="Saída"
            amount="R$ 1.500,00"
            lastTransacao="Última saída dia 13 de janeiro"
          />
          <CardDestaque
            type="total"
            title="Total"
            amount="R$ 20.500,00"
            lastTransacao="01 à 16 de janeiro"
          />
        </CardsDestaque>

        <Transactions>
          <Title>Listagem</Title>
          <TransactionsList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <CardTransacao data={item} />}
          />
        </Transactions>
      </Container>
    </>
  );
}
