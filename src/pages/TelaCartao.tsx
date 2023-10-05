import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "../components/Appbar";
import Constants from 'expo-constants';
import React from 'react';
import FlipCard from 'react-native-flip-card';

export function TelaCartao() {
  return (
    <View style={styles.container}>
      <Appbar
        titulo="Pagamento com cartão"
        backgroundColor="cadetblue"
        fontColor="white"
      />
      <View>
        <Text>The Face</Text>
        <FlipCard
          style={styles.card}
          friction={1000}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          // onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
        >
          {/* Face Side */}
          <View style={styles.face}>
            <Text>The Face</Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
            <Text>The Back</Text>
          </View>
        </FlipCard>
      </View>
      <StatusBar style="light" backgroundColor="cadetblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    // flex: 1,
  },
  card: {
    // width: 200,
    // height: 300,
  },
  face: {
    backgroundColor: "red",
  },
  back: {
    backgroundColor: "blue",
  },
});
