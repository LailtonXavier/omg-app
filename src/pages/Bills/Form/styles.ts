import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: column;
`

interface TypeInput {
  width: number
}
export const ItemsHorizon = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerInputName = styled.View<TypeInput>`
  position: relative;
  width: ${({ width }) => width}%;
`

interface ActiveTypeChoice {
  active: boolean
}
export const ChoiceType = styled.TouchableOpacity<ActiveTypeChoice>`
  width: 100px;
  height: 38px;
  background-color: ${({ active }) =>
    active ? 'rgba(48, 0, 245, 1)' : 'rgba(48, 0, 245, 0.5)'};
  border: 2px solid rgba(48, 0, 245, 1);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 11px;
`
export const ChoiceText = styled.Text<ActiveTypeChoice>`
  font-size: 16px;
  color: ${({ active }) => (active ? '#020111' : 'rgba(48, 0, 245, 0.5)')};
  font-weight: bold;
`
export const Submit = styled.TouchableOpacity`
  background-color: #020111;
  border: 2px solid #3000f5;
  width: 150px;
  height: 38px;
  margin: 11px auto;
  margin-top: 22px;
  border-radius: 10px;
`
export const TextSubmit = styled.Text`
  font-size: 20px;
  color: #3300fa;
  text-align: center;
  font-weight: 400;
`
