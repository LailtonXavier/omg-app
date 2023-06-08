import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native'
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'
import { MaterialIcons } from '@expo/vector-icons'

interface ICustomTabBar {
  state: TabNavigationState<ParamListBase>
  descriptors: BottomTabDescriptorMap
  navigation:
    | NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
    | any
}

const CustomTabBar = ({ state, descriptors, navigation }: ICustomTabBar) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: number) => {
          const { options }: any = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true })
            }
          }

          const onLongPress = () => {
            navigation.emit({
              tape: 'tabLongPress',
              target: route.key,
            })
          }
          return (
            <View key={String(uuid.v4())}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.buttonTab}
              >
                <View style={{ alignItems: 'center', padding: 4 }}>
                  <View
                    style={[
                      styles.innerButton,
                      {
                        backgroundColor: isFocused ? '#3300FA' : 'transparent',
                      },
                    ]}
                  >
                    <MaterialIcons
                      name={options.tabBarLabel}
                      size={34}
                      color={isFocused ? '#020111' : '#3300FA'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#020111',
  },
  content: {
    borderRadius: 99,
    minWidth: 150,
    height: 68,
    flexDirection: 'row',
    marginBottom: Platform.OS === 'ios' ? 38 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#020111',
    gap: 8,
    elevation: 10, // sombra sobre o elemento android
    // sombra IOS
    shadowColor: '#000000cc',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.8,
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    padding: 8,
    borderRadius: 99,
  },
})

export default CustomTabBar
