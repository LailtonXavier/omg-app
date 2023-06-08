import { CardText, Circle, ContainerCard, InfoLeft } from './styles'

export interface ICardBills {
  color: string
  name: string
  value: number
  handleOpemModal?: () => void
}

const CardBills = ({ color, name, value, handleOpemModal }: ICardBills) => {
  return (
    <ContainerCard onPress={handleOpemModal} activeOpacity={0.7}>
      <InfoLeft>
        <Circle color={color} />
        <CardText>{name}</CardText>
      </InfoLeft>
      <CardText>{`R$ ${value.toLocaleString()}`}</CardText>
    </ContainerCard>
  )
}

export default CardBills
