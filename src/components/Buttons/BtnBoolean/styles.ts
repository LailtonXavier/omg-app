import styled from 'styled-components/native'

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
