import React, { useEffect, useState } from 'react'
import { Container, IconBack, Text, TitlePage, TopContentBill } from './styles'
import { Ionicons } from '@expo/vector-icons'
import {
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Easing,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import uuid from 'react-native-uuid'
import Form from './Form'
import CardBills from '../../components/CardBills'
import { getBills, saveBills } from '../../utils/Storage'
import { addZero } from '../../utils/AddZero'
import { IBillsDatas } from './interface'
import { Header } from '../Home/HomeContent/styles'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import TextTicker from 'react-native-text-ticker'

const Bills = () => {
  const [name, setName] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [parcel, setParcel] = useState<string>('')
  const [about, setAbout] = useState<string>('')
  const [expenses, setExpenses] = useState<boolean>(false)
  const [bill, setBill] = useState<boolean>(false)
  const [other, setOther] = useState<boolean>(false)
  const [data, setData] = useState<IBillsDatas>({ datas: [] })
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const dateFull = new Date()
  const created = `${addZero(dateFull.getDate())}/${addZero(
    dateFull.getMonth(),
  )}/${dateFull.getFullYear()}`

  const clearInputs = () => {
    setName('')
    setValue('')
    setAbout('')
    setParcel('')
    setExpenses(false)
    setBill(false)
    setOther(false)
  }

  const handleSubmit = async () => {
    const allData = {
      name,
      about,
      parcel,
      value,
      color: String(
        (expenses && '#A87AF8') || (bill && '#00DBAB') || (other && '#3000F5'),
      ),
      created,
      id: String(uuid.v4()),
    }

    setData((prevState) => {
      const datas: any[] = [...prevState.datas, allData]
      return { ...prevState, datas }
    })

    try {
      await saveBills('@saveBill', allData)
      clearInputs()
      // await deleteBills('d7aea9db-3465-4dd9-8ab7-f37d3c44e9a0')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getAll() {
      try {
        const res = await getBills('@saveBill')
        console.log('datas all', res)
      } catch (error) {
        console.log(error)
      }
    }
    getAll()
  }, [])

  const handleBack = () => {
    navigation.navigate('Home')
  }

  console.log('chanou', data)

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TopContentBill>
          <Header>
            <IconBack onPress={handleBack} activeOpacity={0.7}>
              <Ionicons
                name="ios-chevron-back-sharp"
                size={34}
                color="#A3A2AF"
              />
            </IconBack>

            <TitlePage>
              <Text>Bills</Text>
            </TitlePage>
          </Header>

          <Form
            name={name}
            setName={setName}
            about={about}
            setAbout={setAbout}
            parcel={parcel}
            setParcel={setParcel}
            setValue={setValue}
            value={value}
            setExpenses={setExpenses}
            expenses={expenses}
            setBill={setBill}
            bill={bill}
            setOther={setOther}
            other={other}
            handleSubmit={handleSubmit}
          />
        </TopContentBill>
      </TouchableWithoutFeedback>
      <FlatList
        data={data.datas}
        style={{ marginLeft: 30, marginRight: 30, marginBottom: 10 }}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <CardBills
            color={item.color}
            name={item.name}
            value={Number(item.value)}
          />
        )}
        ListEmptyComponent={() => (
          <TextTicker
            style={{
              color: '#A3A2AF',
              fontWeight: '400',
              fontSize: 24,
              textAlign: 'center',
              width: '100%',
            }}
            duration={10000}
            easing={Easing.linear}
            repeatSpacer={80}
            marqueeDelay={1000}
            loop
          >{`Let's add oneffdsfdfbggg more bill :-|`}</TextTicker>
        )}
      />
      <LinearGradient
        colors={['rgba(2, 1, 15, 1)', 'rgba(28, 22, 54, 1)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          zIndex: -99,
          backgroundColor: 'transparent',
        }}
      />
    </Container>
  )
}

export default Bills
