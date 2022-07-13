import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigations/Navigations";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your </Text>
        <StatusBar style='auto' />
      </View> */}
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
