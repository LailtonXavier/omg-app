import React from 'react'
import { Container, ContainerInputName, ItemsHorizon } from './styles'
import Input from '../../../components/Input'
import { BtnSubmit, BtnBoolean } from '../../../components/Buttons'

export interface IForm {
  name: string
  setName: (name: string) => void
  value: string
  setValue: (value: string) => void
  parcel: string
  setParcel: (parcel: string) => void
  about: string
  setAbout: (about: string) => void
  setExpenses: (about: boolean) => void
  expenses: boolean
  setBill: (about: boolean) => void
  bill: boolean
  setOther: (about: boolean) => void
  other: boolean
  handleSubmit: () => void
}

export interface IFormData {
  data: IForm
}

const Form = ({
  name,
  setName,
  about,
  setAbout,
  parcel,
  setParcel,
  setValue,
  value,
  setExpenses,
  expenses,
  setBill,
  bill,
  setOther,
  other,
  handleSubmit,
}: IForm) => {
  console.log(other)
  return (
    <Container>
      <ContainerInputName width={100}>
        <Input
          inputName="name"
          onChangeText={setName}
          placeholderTextColor="#474747"
          value={name}
          placeholder="Netflix ..."
          keyboardType="default"
        />
      </ContainerInputName>
      <ItemsHorizon>
        <ContainerInputName width={46.5}>
          <Input
            inputName="value"
            onChangeText={setValue}
            placeholderTextColor="#474747"
            value={value}
            placeholder="40"
            keyboardType="numeric"
          />
        </ContainerInputName>
        <ContainerInputName width={46.5}>
          <Input
            inputName="parcel"
            onChangeText={setParcel}
            placeholderTextColor="#474747"
            value={parcel}
            placeholder="12"
            keyboardType="numeric"
          />
        </ContainerInputName>
      </ItemsHorizon>
      <ContainerInputName width={100}>
        <Input
          inputName="about"
          onChangeText={setAbout}
          placeholderTextColor="#474747"
          value={about}
          placeholder="movie titanic is very good"
          keyboardType="default"
          multiline
        />
      </ContainerInputName>

      <ItemsHorizon>
        <BtnBoolean
          onPress={() => setExpenses(!expenses)}
          active={expenses}
          activeOpacity={0.7}
          nameButton="expenses"
        />
        <BtnBoolean
          onPress={() => setBill(!bill)}
          active={bill}
          activeOpacity={0.7}
          nameButton="bill"
        />
        <BtnBoolean
          onPress={() => setOther(!other)}
          active={other}
          activeOpacity={0.7}
          nameButton="other"
          disabled={false}
        />
      </ItemsHorizon>

      <BtnSubmit buttonName="Save" onPress={handleSubmit} />
    </Container>
  )
}

export default Form
