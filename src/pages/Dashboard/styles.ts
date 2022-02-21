import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex:1
  background-color: ${theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${theme.colors.primary};

  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(25)}px;
  align-items: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  border-radius: 10px;
`;
export const User = styled.View`
  margin-left: 17px;
`;
export const UserGreeting = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
`;
export const UserName = styled.Text`
  color: ${theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold};
`;
export const Icon = styled(Feather)`
    
    color: ${theme.colors.secondary}
    font-size: ${RFValue(24)}px

`;

export const CardsDestaque = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1%;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.regular};
  margin-bottom: 16px;
`;

export const TransactionsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
