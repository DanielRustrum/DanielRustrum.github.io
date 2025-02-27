import {Tile, Tiles, LinkTile} from '../components/core/Tile'
import {P} from '../components/core/P'

export function Landing() {
  return (
    <Tiles>
      <Tile name="Welcome" start_at={[1,1]} height={1} width={2}>
        <P>Hello!</P>
      </Tile>
      <Tile name="Profile" start_at={[3,1]} height={2} width={1} />
      <LinkTile name='Journey' start_at={[4,1]} title='My Journey' background_image='map' icon='map' link_to='/journey' height={1} width={1}/>
      <LinkTile name='Blog' start_at={[1,2]} title='My Blog' background_image='map' icon='map' link_to='/journey' height={1} width={1}/>
      <Tile name="Programming" start_at={[1,3]} height={4} width={1}>
        <P>Hello!</P>
      </Tile>
      <Tile name="Photography" start_at={[2,2]} height={5} width={1}>
        <P>Hello!</P>
      </Tile>
      <Tile name="Design" start_at={[3,3]} height={4} width={1}>
        <P>Hello!</P>
      </Tile>
      <Tile name="Contact" start_at={[4,2]} height={3} width={1}>
        <P>Hello!</P>
      </Tile>
      <Tile name="Themes" start_at={[4,5]} height={1} width={1}>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
        <P>Hello!</P>
      </Tile>
      <LinkTile name='Resume' start_at={[4,6]} title='My Resume' background_image='map' icon='map' link_to='/journey' height={1} width={1}/>
    </Tiles>
  )
}