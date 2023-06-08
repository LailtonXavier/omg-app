import { createDrawerNavigator } from '@react-navigation/drawer'

import Routes from '..'
import React from 'react'
import CustomDrawer from '../../components/CustomDrawer'

const tabDrawer = createDrawerNavigator()

export default function Drawer() {
  return (
    <tabDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}
      drawerContent={CustomDrawer}
    >
      <tabDrawer.Screen name="Inicio" component={Routes} />
    </tabDrawer.Navigator>
  )
}
