import { Modal, Text, TouchableOpacity } from 'react-native'
import { ContainerModalOneBill } from './styles'

interface IOndeBill {
  modalVisible: boolean
  setModalVisible: (modal: boolean) => void
}

const OneBill = ({ modalVisible, setModalVisible }: IOndeBill) => {
  return (
    <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <ContainerModalOneBill>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>feche o modal</Text>
        </TouchableOpacity>
      </ContainerModalOneBill>
    </Modal>
  )
}

export default OneBill
