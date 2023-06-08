import { InputName, InputStyle } from './styles'

interface IInput {
  onChangeText: (name: string) => void
  placeholderTextColor: string
  inputName: string
  value: string
  placeholder: string
  keyboardType:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
  multiline?: boolean
}

const Input = ({
  onChangeText,
  placeholder,
  placeholderTextColor,
  value,
  inputName,
  keyboardType,
  multiline,
}: IInput) => {
  return (
    <>
      <InputName>{inputName}</InputName>
      <InputStyle
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </>
  )
}

export default Input
