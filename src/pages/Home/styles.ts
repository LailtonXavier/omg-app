import { FlatListProps, FlatList } from 'react-native'
import styled from 'styled-components/native'
import { CardProps } from '.'

export const Container = styled.View`
  flex: 1;
  background-color: #02010f;
  padding: 30px;
  padding-bottom: 0;
`

export const Bills = styled.ScrollView`
  padding: 34px 0;
`
export const FlatListContainer = styled(
  FlatList as new (props: FlatListProps<CardProps>) => FlatList<CardProps>,
)
