import AsyncStorage from '@react-native-async-storage/async-storage'
import { IFormData } from '../../pages/Bills/interface'

export async function getBills(key: string) {
  const bills = await AsyncStorage.getItem(key)
  return JSON.parse(String(bills)) || []
}

export async function saveBills(key: string, newItem: IFormData) {
  try {
    const allBills = await getBills(key)
    const newBills = []
    const hasItem = allBills.some((item: IFormData) => item.id === newItem.id)

    if (hasItem) {
      console.log('JA EXISTE ESSE ITEM')
      return
    }

    newBills.push(...allBills, newItem)
    await AsyncStorage.setItem(key, JSON.stringify(newBills))
  } catch (error) {
    console.error('FAILED', error)
  }
}

export async function deleteBills(id: string) {
  const allBills = await getBills('@saveBill')

  const myBills = allBills.filter((item: IFormData) => {
    return item.id !== id
  })

  await AsyncStorage.setItem('@saveBill', JSON.stringify(myBills))
  return myBills
}
