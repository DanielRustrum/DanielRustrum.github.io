import { CSSProperties } from "react"
import { Component, IntRange } from "../../types"

const TILE_GRID_WIDTH = 4 as const
const TILE_GRID_HEIGHT = 6 as const

interface TileProps {
    name: string
    height: IntRange<1, typeof TILE_GRID_HEIGHT>
    width: IntRange<1, typeof TILE_GRID_WIDTH>
    start_at: [TileProps["width"], TileProps["height"]]
}

export const Tile: Component<TileProps> = ({
    name,
    height,
    width,
    start_at,
    children
}) => {
    const styles: CSSProperties = {
        backgroundColor: "#1e1e2e",
        padding: "10px",
        border: "3px #6c7086 solid",
        borderRadius: "15px",
        color: "#cdd6f4",
        gridArea: `${start_at[1]} / ${start_at[0]} / span ${height} / span ${width}`,
    }

    return (
        <li id={`tile--tile-${name}`} style={styles} >
            <div className="scrollbar thin">
                {children}
            </div>
        </li>
    )
}


interface LinkTileProps {
    link_to: string
    background_image: string
    title: string
    icon: string
}

export const LinkTile: Component<LinkTileProps, typeof Tile, "height" | "width">= ({
    name,
    start_at,
    background_image,
    title,
}) => {
    return (
        <Tile 
            name={name}
            start_at={start_at}
            width={1}
            height={1}
        >
            <div style={{display: "flex", backgroundImage: background_image}}>
                <p>{title}</p>
                <p>icon</p>
            </div>
        </Tile>
    )
}

export const Tiles: Component = ({
    children
}) => {
    const styles: CSSProperties = {
        listStyle: 'none',
        display: 'grid',
        gap: '15px',
        gridTemplateColumns: `repeat(${TILE_GRID_WIDTH}, 1fr)`,
        gridTemplateRows: `repeat(${TILE_GRID_HEIGHT}, 1fr)`,
        paddingLeft: "0px",
        width: "90vw",
        height: "85vh",
        paddingBottom: "5vh",
        overflow: "none"
    }

    return (
        <>
            <ul id="tile--grid" style={styles}>{children}</ul>
        </>
    )
}