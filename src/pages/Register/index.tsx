import React, { useState } from "react";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { SelecionarCategoria } from "../../components/Forms/SelecionarCategoria";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionTypes,
} from "./style";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Saída"
              onPress={() => handleTransactionTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </TransactionTypes>
          <SelecionarCategoria title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
