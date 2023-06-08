import { Submit, TextSubmit } from './styles'

interface IBtnSubmit {
  buttonName: string
  onPress: () => void
}

const BtnSubmit = ({ buttonName, onPress }: IBtnSubmit) => {
  return (
    <>
      <Submit onPress={onPress}>
        <TextSubmit>{buttonName}</TextSubmit>
      </Submit>
    </>
  )
}

export default BtnSubmit
