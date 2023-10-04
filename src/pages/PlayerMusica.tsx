import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Appbar } from '../components/Appbar';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function PlayerMusica() {
  return (
    <View style={styles.container}>
      <Appbar
        titulo="Player de música"
        backgroundColor="green"
        fontColor="white"
      />
      <StatusBar style="light" backgroundColor="green" />
      <View style={styles.main}>
        <View>
          <Image
            source={require("../../assets/imagens/eletric_guitar.png")}
            style={styles.imagem}
          />
        </View>
        <View style={styles.informacoes}>
          <TouchableOpacity onPress={() => { }}>
            <MaterialIcons name="playlist-add" size={32} color="black" />
          </TouchableOpacity>
          <View style={{
            alignItems: "center"
          }}>
            <Text style={styles.nomeMusica}>Nome da Musica</Text>
            <Text style={styles.nomeArtista}>Nome do Artista</Text>
          </View>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="md-heart" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.tempo}>0:09</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
          />
          <Text style={styles.tempo}>6:52</Text>
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="repeat" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="step-backward" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="play-circle" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="step-forward" size={36} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FontAwesome name="random" size={36} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    flex: 1,
  },
  main: {
    // height: "100%",
    paddingHorizontal: 22,
    paddingVertical: 12,
    alignItems: "center",
    // position: "relative",
  },
  imagem: {
    height: 300,
    width: 300,
    borderRadius: 16,
    borderColor: "black",
    borderWidth: 5,
  },
  informacoes: {
    margin: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%"
  },
  nomeMusica: {
    fontSize: 22,
  },
  nomeArtista: {
    fontSize: 18,
  },
  sliderContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  slider: {
    width: "80%",
    height: 40,
  },
  tempo: {
    fontSize: 16,
  },
  botoes: {
    width: "100%",
    flexDirection: "row",
    // columnGap: 16
    justifyContent: "space-between",
    marginBottom: 16,
  }
});


