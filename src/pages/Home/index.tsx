import LinearBottom from '../../components/LinearContainer/LinearBottom'
import { Container } from './styles'
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { getBills } from '../../utils/Storage'
import HomeContent from './HomeContent'
import { useIsFocused } from '@react-navigation/native'
import ContainerFilter from './ContainerFilter'
import { IFormData } from '../Bills/interface'

export interface CardProps {
  x: number
  y: number
  label: string
  color: string
}

export type MonthsProps = 'Janeiro' | 'Fevereiro' | 'Março'

const Home = () => {
  const [bill, setBill] = useState<CardProps[]>([])
  const [storageBill, setStorageBill] = useState<IFormData[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isFocused = useIsFocused()
  const [totalSalary, setTotalSalary] = useState<number>(0)

  useEffect(() => {
    if (isFocused) {
      // setIsLoading(true)
      const getDataBills = async () => {
        let tBill = 0
        let tExpenses = 0
        let tOther = 0

        try {
          const res = await getBills('@saveBill')
          res.forEach((item: any) => {
            if (item.color === '#A87AF8') {
              tExpenses += Number(item.value)
            }
            if (item.color === '#00DBAB') {
              tBill += Number(item.value)
            }
            if (item.color === '#3000F5') {
              tOther += Number(item.value)
            }
          })

          const resulBill = [
            { x: 1, y: tExpenses, label: 'expenses', color: '#A87AF8' },
            { x: 2, y: tBill, label: 'bills', color: '#00DBAB' },
            { x: 3, y: tOther, label: 'other', color: '#3000F5' },
          ]

          setTotalSalary(tBill + tExpenses + tOther)
          setBill(resulBill)
          setStorageBill(res)
          setIsLoading(false)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }

      getDataBills()
    }
  }, [isFocused])

  if (isLoading) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    )
  }

  return (
    <>
      <Container>
        <HomeContent totalSalary={3000 - totalSalary} data={bill} />
        <ContainerFilter datas={storageBill} />

        <LinearBottom
          colorTop="rgba(2, 1, 15, 0.82)"
          colorBottom="rgba(28, 22, 54, 1)"
        />
        <StatusBar style="light" />
      </Container>
    </>
  )
}

export default Home
