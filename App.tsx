import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './componentes/Home';
import Produtos from './componentes/Produto';
import Carrinho from './componentes/Carrinho';
import Contato from './componentes/Contato';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Produtos" component={Produtos} />
      <Drawer.Screen name="Carrinho" component={Carrinho} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Drawer" 
          component={DrawerNavigator} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}