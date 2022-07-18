import { createStackNavigator } from "@react-navigation/stack";
import DetailProduct from "../components/homeComponents/detailProduct/DetailProduct";
import BottomTabScreen from "../Routes/Routes";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Navigation = () => {
  const Stack = createSharedElementStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='bottom' component={BottomTabScreen} />
      <Stack.Screen name='detail' component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default Navigation;
