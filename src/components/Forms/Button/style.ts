import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../global/styles/theme";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 16px 18px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.medium}
  color: ${theme.colors.shape};
`;
