import { LinearGradient } from 'expo-linear-gradient'
import { CircleUser, Header, MyWay, TopContent, UserName } from './styles'
import { Dimensions } from 'react-native'
import MainGraphic from '../../../components/MainGraphic'
import { CardProps } from '..'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface IDatas {
  data: CardProps[]
  totalSalary: number
}

const HomeContent = ({ data, totalSalary }: IDatas) => {
  const navegation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const opendOther = () => {
    navegation.navigate('Other')
  }
  return (
    <>
      <LinearGradient
        colors={['rgba(28, 22, 54, 1)', 'rgba(2, 1, 15, 0.82)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 340,
          width: Dimensions.get('screen').width,
          borderRadius: 50,
          zIndex: -99,
          backgroundColor: 'transparent',
        }}
      />
      <TopContent>
        <Header>
          <UserName>Lailton</UserName>
          <CircleUser onPress={opendOther}></CircleUser>
        </Header>
        <MyWay>R$ {totalSalary.toLocaleString()}</MyWay>
        <MainGraphic dataBills={data} />
      </TopContent>
    </>
  )
}

export default HomeContent
