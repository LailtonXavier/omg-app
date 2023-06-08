import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../pages/Home'
import Other from '../../pages/Other'
// import Bills from '../../pages/Bills'

const Stack = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          animation: 'slide_from_left',
          animationDuration: 30,
        }}
      />
      <Stack.Screen
        name="Other"
        component={Other}
        options={{
          headerShown: false,
          animation: 'slide_from_left',
          animationDuration: 30,
        }}
      />
      {/* <Stack.Screen
        name="Bills"
        component={Bills} 
        options={{
          title: 'Detalhes da receita',
          animation: 'fade_from_bottom',
          animationDuration: 30,
        }}
      /> */}
      {/* <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Veja o que encontramos'
        }}
      /> */}
    </Stack.Navigator>
  )
}
