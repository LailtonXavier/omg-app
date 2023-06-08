import { VictoryPie } from 'victory-native'
import { Graphic } from './styles'
import { CardProps } from '../../pages/Home'

interface IMainGraphic {
  dataBills: CardProps[]
}

const MainGraphic = ({ dataBills }: IMainGraphic) => {
  return (
    <Graphic>
      <VictoryPie
        data={dataBills}
        colorScale={dataBills.map((data) => data.color)}
        height={300}
        cornerRadius={10}
        startAngle={90}
        endAngle={-90}
        labelRadius={80}
        style={{
          labels: {
            fill: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
        }}
        animate={{
          duration: 2000,
        }}
      />
    </Graphic>
  )
}

export default MainGraphic
