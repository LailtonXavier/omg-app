import styled from 'styled-components/native'

export const ContainerChooseFilter = styled.View`
  position: relative;
  width: 100%;
  height: 48px;
`
export const ChooseFilter = styled.ScrollView`
  display: flex;
  position: absolute;
  top: 0;
  left: -30px;
  right: 30px;
  padding-right: 40px;
`
export const ChooseType = styled.TouchableOpacity`
  width: 80px;
  height: 70px;
  margin: 0 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1929;
`
export const ChooseTypeName = styled.Text`
  color: rgb(253, 253, 253);
  text-align: center;
  font-weight: 600;
  font-size: 14px;
`
export const Filter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
`
export const BillsText = styled.Text`
  color: rgb(253, 253, 253);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  align-items: center;
`
export const ContainerValueFilter = styled.View`
  min-width: 100px;
  height: 32px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const ValueFilter = styled.Text`
  color: #fdfdfd;
  font-weight: 800;
  font-style: normal;
`
