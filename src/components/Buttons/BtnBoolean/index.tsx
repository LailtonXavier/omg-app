import React from 'react'
import { ChoiceType, ChoiceText } from './styles'

interface IButton {
  activeOpacity: number
  onPress: () => void
  active: boolean
  disabled?: boolean
  nameButton: string
}

const BtnBoolean = ({
  nameButton,
  active,
  activeOpacity,
  onPress,
  disabled,
}: IButton) => {
  return (
    <>
      <ChoiceType
        disabled={disabled}
        activeOpacity={activeOpacity}
        onPress={onPress}
        active={active}
      >
        <ChoiceText active={active}>{nameButton}</ChoiceText>
      </ChoiceType>
    </>
  )
}

export default BtnBoolean
