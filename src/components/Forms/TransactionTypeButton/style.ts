import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${RFPercentage(23)}px;

  border-radius: 5px;
  border: ${({ isActive }) => (isActive ? 0 : 1.5)}px solid ${theme.colors.text};
  padding: 20px;

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${theme.colors.attetion_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${theme.colors.sucess_light};
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;

  color: ${({ type }) =>
    type === "up" ? theme.colors.sucess : theme.colors.attetion};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${theme.fonts.regular}
  margin-left: ${RFValue(12)}px;
`;
