import { createStackNavigator } from "@react-navigation/stack";
import DetailProduct from "../components/homeComponents/detailProduct/DetailProduct";
import BottomTabScreen from "../Routes/Routes";
import Expedition from "../components/homeComponents/detailProduct/detailProductComponents/expedition/Expedition";
import { windowHeight } from "../constants/theme";
import Livraison from "../components/homeComponents/detailProduct/detailProductComponents/livraison/Livraison";
import GoBack from "../components/homeComponents/detailProduct/detailProductComponents/goBack/GoBack";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name='bottom' component={BottomTabScreen} />
        <Stack.Screen name='detail' component={DetailProduct} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          cardStyle: {
            transform: [{ translateY: windowHeight / 8 }],
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Stack.Screen name='expedition' component={Expedition} />
        <Stack.Screen name='livraison' component={Livraison} />
        <Stack.Screen name='goback' component={GoBack} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;
