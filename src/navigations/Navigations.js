import { createStackNavigator } from "@react-navigation/stack";
import BottomTabScreen from "../Routes/Routes";

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='bottom' component={BottomTabScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
