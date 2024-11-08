import { Home } from "./pages/Home/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, StyleSheet } from "react-native";
import background from "../assets/images/background.png"

export default function Index() {
    return (
        <ImageBackground source={background} style={s.background} imageStyle={s.img}>
        <SafeAreaProvider>
          <SafeAreaView style={s.container}>
            <Home />
          </SafeAreaView>
          </SafeAreaProvider>
        </ImageBackground>
    )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    opacity: 0.75,
  },
});
