import { KaushanScript_400Regular } from "@expo-google-fonts/kaushan-script";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const GlobalStyle = () => {
  const [ fontsLoaded, error ] = useFonts( { title: KaushanScript_400Regular } );

  if (!fontsLoaded) return <AppLoading />;
  
  return { title };
};

export default GlobalStyle;
