import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f2f5;
`;

export const Header = styled.View`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${theme.colors.shape};
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionTypes = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 8px;
`;
