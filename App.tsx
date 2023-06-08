import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/routes/Drawer'

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}
