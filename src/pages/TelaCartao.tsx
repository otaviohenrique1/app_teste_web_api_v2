import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { Appbar } from "../components/Appbar";
import Constants from 'expo-constants';

export function TelaCartao() {
  return (
    <View style={styles.container}>
      <Appbar
        titulo="Player de música"
        backgroundColor="cadetblue"
        fontColor="white"
      />
      <StatusBar style="light" backgroundColor="cadetblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1,
  },
});
