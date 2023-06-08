import styled from 'styled-components/native'

interface IBackground {
  color: string
}

export const ContainerCard = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  border: 1px solid #272143;
  border-radius: 20px;
  margin: 14px 0;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const InfoLeft = styled.View`
  flex-direction: row;
`
export const Circle = styled.View<IBackground>`
  width: 40px;
  height: 40px;
  background-color: ${({ color }) => color};
  border-radius: 100px;
  margin-right: 20px;
`
export const CardText = styled.Text`
  font-size: 20px;
  color: #8b8b94;
  font-style: normal;
  font-weight: 600;
`
