import { StyleSheet, Text, View } from "react-native";

interface AppbarProps {
  titulo: string;
  backgroundColor: string;
  fontColor: string;
}

export function Appbar(props: AppbarProps) {
  const { titulo, backgroundColor, fontColor } = props;
  const appbarStyle = styles(backgroundColor, fontColor);

  return (
    <View style={appbarStyle.appbar}>
      <Text style={appbarStyle.appbarTitulo}>{titulo}</Text>
    </View>
  );
}

const styles = (backgroundColor: string, fontColor: string) => {
  return StyleSheet.create({
    appbar: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 22,
      backgroundColor: backgroundColor,
    },
    appbarTitulo: {
      fontSize: 22,
      color: fontColor,
    },
  });
};
