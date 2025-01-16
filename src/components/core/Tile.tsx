import { FC as FunctionComponent, ReactNode } from "react"
import './Tile.scss'

type TileComponent = FunctionComponent<{
    name: string
    children: ReactNode
}>

export const Tile: TileComponent = ({
    name,
    children
}) => {
    return (
        <div id={`tile--${name}`} className="tile" >{children}</div>
    )
}