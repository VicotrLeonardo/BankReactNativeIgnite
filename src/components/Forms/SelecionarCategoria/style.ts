import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 18px 16px;
  border-radius: 5px;

  background-color: ${theme.colors.shape};
`;

export const Category = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${theme.colors.text};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text};
`;
