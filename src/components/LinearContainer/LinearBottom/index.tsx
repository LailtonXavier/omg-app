import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'

interface ILinearBottom {
  colorTop: string
  colorBottom: string
}

const LinearBottom = ({ colorTop, colorBottom }: ILinearBottom) => {
  return (
    <LinearGradient
      colors={[colorBottom, colorTop]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    borderRadius: 0,
    zIndex: -2,
    backgroundColor: 'transparent',
  },
})

export default LinearBottom
