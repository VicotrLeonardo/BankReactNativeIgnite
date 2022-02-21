import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps {
  type: "positive" | "negative";
}

interface IconProps {
  name: string;
}

export const Container = styled.View`
  background-color: ${theme.colors.shape};
  border-radius: 5px;

  padding: 17px 24px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
`;
export const Amount = styled.Text<TypeProps>`
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  font-family: ${theme.fonts.regular};

  color: ${({ type }) =>
    type === "positive" ? theme.colors.sucess : theme.colors.attetion};
`;
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;
`;
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text};
`;
export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
  margin-left: 17px;
`;
export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
`;
