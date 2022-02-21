import styled, { css } from "styled-components/native";

import { Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  position: relative;
  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;

  align-self: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text<TypeProps>`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ type }) => (type === "total" ? theme.colors.shape : "black")};
`;
export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  ${(props) =>
    props.type === "up" &&
    css`
      color: ${theme.colors.sucess};
    `}

  ${(props) =>
    props.type === "down" &&
    css`
      color: ${theme.colors.attetion};
    `}

  ${(props) =>
    props.type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}
`;
export const Footer = styled.View``;
export const Amount = styled.Text<TypeProps>`
  font-family: ${theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
  color: ${({ type }) => (type === "total" ? theme.colors.shape : "black")};
`;
export const LastTransacao = styled.Text<TypeProps>`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ type }) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
