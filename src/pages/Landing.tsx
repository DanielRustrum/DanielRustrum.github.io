import {Tile, Tiles} from '../components/core/Tile'
import {P} from '../components/core/P'

export function Landing() {
  return (
    <Tiles height={6} width={4}>
      <Tile name="Test" start_at={[0,0]} height={3} width={1}>
        <P>Hello!</P>
      </Tile>
    </Tiles>
  )
}