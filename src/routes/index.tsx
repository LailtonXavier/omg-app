import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../pages/Home'
import Bills from '../pages/Bills'
import { StackRoutes } from './StackRoutes'
// import CustomTabBar from '../components/CustomTabBar'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import React from 'react'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1212120',

        tabBarStyle: {
          backgroundColor: '#020111d8',
          borderTopWidth: 0,
          position: 'absolute',
          left: '32.5%',
          bottom: 10,
          width: '35%',
          borderRadius: 99,
          // Whatever width is, left equals (100% - width)/2
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          // tabBarLabel: 'apps',
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <AntDesign name="appstore1" color="#fff" size={30} />
            }
            return <AntDesign name="appstore-o" color={color} size={30} />
          },
        }}
      />
      <Tab.Screen
        name="BillTab"
        component={Bills}
        options={{
          // tabBarLabel: 'add',
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <MaterialIcons name="monetization-on" color="#fff" size={35} />
              )
            }
            return (
              <MaterialIcons name="monetization-on" color={color} size={35} />
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes
