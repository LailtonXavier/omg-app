import * as React from 'react'
import { Button, View, Text } from 'react-native'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

export default function Other() {
  const ref = React.useRef<BottomSheetModalMethods>(null)

  const snapPoints = ['25%', '40%']

  const handlePressModal = () => {
    ref.current?.present()
  }

  return (
    <BottomSheetModalProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button title="Presse Modal" onPress={handlePressModal} />
        <BottomSheetModal
          backgroundStyle={{ backgroundColor: '#754' }}
          ref={ref}
          index={0}
          snapPoints={snapPoints}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 10,
              paddingHorizontal: 15,
              borderTopEndRadius: 10,
              backgroundColor: '#c7c7c7',
            }}
          >
            <Text
              style={{
                alignItems: 'center',
              }}
            >
              Hello
            </Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  )
}
