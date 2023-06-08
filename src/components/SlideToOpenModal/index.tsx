import { Animated, Modal, TouchableOpacity, View } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

interface ISlideToOpemModal {
  modalVisible: boolean
  setModalVisible: (modal: boolean) => void
}

const SlideToOpemModal = ({
  modalVisible,
  setModalVisible,
}: ISlideToOpemModal) => {
  const translateX = new Animated.Value(0)
  const gestureState = new Animated.Value(State.UNDETERMINED)

  const handleGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX, state: gestureState } }],
    { useNativeDriver: true },
  )

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Your modal content */}
      </Modal>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleGestureEvent}
      >
        <Animated.View
          style={[
            { flex: 1, transform: [{ translateX }] },
            /* Add additional styles for your sliding element */
          ]}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={{ flex: 1 }}
            onPress={() => setModalVisible(true)}
          >
            {/* Your content that triggers the modal */}
          </TouchableOpacity>
        </Animated.View>
      </PanGestureHandler>
    </View>
  )
}

export default SlideToOpemModal
