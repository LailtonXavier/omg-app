import { Dimensions, FlatList, Text, View } from 'react-native'
import {
  BillsText,
  ChooseFilter,
  ChooseType,
  ChooseTypeName,
  ContainerChooseFilter,
  ContainerValueFilter,
  Filter,
  ValueFilter,
} from './styles'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import CardBills from '../../../components/CardBills'
import { IBillsDatas, IFormData } from '../../Bills/interface'
import React, { useEffect, useState } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

const ContainerFilter = ({ datas }: IBillsDatas) => {
  const [dataFilters, setDataFilters] = useState<IFormData[] | []>([])
  const [totalState, setTotalState] = useState<number>(0)
  const [up, setUp] = useState<boolean>(true)
  const [filtedName, setFiltedName] = useState<string>('Recents')

  const ref = React.useRef<BottomSheetModalMethods>(null)

  const snapPoints = ['25%', '40%']

  const handlePressModal = () => {
    ref.current?.present()
  }

  const handleOrder = (myUp: boolean, array: IFormData[] | []) => {
    const order: IFormData[] | [] = array

    const news: IFormData[] = [...order].sort((a, b) =>
      myUp
        ? Number(b.value) - Number(a.value)
        : Number(a.value) - Number(b.value),
    )

    myUp ? setUp(true) : setUp(false)

    setDataFilters(news)
  }
  useEffect(() => {
    let total = 0
    datas.forEach((item) => {
      total += Number(item.value)
    })

    setTotalState(total)
    handleOrder(true, datas)
  }, [datas])

  const handleFilter = (n: number) => {
    const myFilter: IFormData[] | any = []
    let total = 0
    datas.forEach((item) => {
      if (n === 1) {
        myFilter.push(item)
        total += Number(item.value)
        setFiltedName('Recents')
      }
      if (n === 2 && item.color === '#A87AF8') {
        myFilter.push(item)
        total += Number(item.value)
        setFiltedName('Expenses')
      }
      if (n === 3 && item.color === '#00DBAB') {
        myFilter.push(item)
        total += Number(item.value)
        setFiltedName('Bills')
      }
      if (n === 4 && item.color === '#3000F5') {
        myFilter.push(item)
        total += Number(item.value)
        setFiltedName('Others')
      }
    })
    setTotalState(total)
    handleOrder(true, myFilter)
  }

  return (
    <BottomSheetModalProvider>
      <ContainerChooseFilter>
        <ChooseFilter
          horizontal
          style={{ width: Dimensions.get('window').width }}
        >
          <ChooseType onPress={() => handleFilter(1)}>
            <MaterialCommunityIcons
              name="cash"
              size={40}
              color="rgb(253, 253, 253)"
            />
            <ChooseTypeName>all</ChooseTypeName>
          </ChooseType>

          <ChooseType onPress={() => handleFilter(2)}>
            <MaterialCommunityIcons
              name="cash-lock"
              size={40}
              color="rgb(253, 253, 253)"
            />
            <ChooseTypeName>expenses</ChooseTypeName>
          </ChooseType>

          <ChooseType onPress={() => handleFilter(3)}>
            <MaterialCommunityIcons
              name="cash-minus"
              size={40}
              color="rgb(253, 253, 253)"
            />
            <ChooseTypeName>bills</ChooseTypeName>
          </ChooseType>

          <ChooseType onPress={() => handleFilter(4)}>
            <MaterialCommunityIcons
              name="cash-fast"
              size={40}
              color="rgb(253, 253, 253)"
            />
            <ChooseTypeName>others</ChooseTypeName>
          </ChooseType>

          <ChooseType onPress={() => handleOrder(true, dataFilters)}>
            <Ionicons name="md-caret-up" size={34} color="rgb(253, 253, 253)" />
            <ChooseTypeName>more</ChooseTypeName>
          </ChooseType>

          <ChooseType onPress={() => handleOrder(false, dataFilters)}>
            <Ionicons
              name="md-caret-down"
              size={34}
              color="rgb(253, 253, 253)"
            />
            <ChooseTypeName>less</ChooseTypeName>
          </ChooseType>
        </ChooseFilter>
      </ContainerChooseFilter>
      <Filter>
        <BillsText>
          {filtedName}{' '}
          {up ? (
            <Ionicons name="chevron-up" size={20} color="#076b1d" />
          ) : (
            <Ionicons name="chevron-down" size={20} color="rgb(119, 20, 20)" />
          )}
        </BillsText>
        <ContainerValueFilter>
          <ValueFilter>RS {totalState.toLocaleString()}</ValueFilter>
        </ContainerValueFilter>
      </Filter>

      <FlatList
        data={dataFilters}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <CardBills
            color={item.color}
            name={item.name}
            value={Number(item.value)}
            handleOpemModal={handlePressModal}
          />
        )}
      />

      <BottomSheetModal
        backgroundStyle={{
          backgroundColor: 'rgba(39, 33, 67, 0.79)',
          borderColor: '#211A43',
          borderTopWidth: 23,
        }}
        ref={ref}
        index={0}
        snapPoints={snapPoints}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
            paddingHorizontal: 15,
            borderTopEndRadius: 10,
          }}
        >
          <Text
            style={{
              alignItems: 'center',
            }}
          >
            Hello
          </Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default ContainerFilter
