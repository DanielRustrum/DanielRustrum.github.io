import { CSSProperties } from "react"
import { Component, IntRange } from "../../types"
import { motion, Variants } from "motion/react"

import {P} from '../../components/core/P'
import {Icon} from '../../components/core/Icon'

const TILE_GRID_WIDTH = 4 as const
const TILE_GRID_HEIGHT = 6 as const

interface TileProps {
    name: string
    height: IntRange<1, typeof TILE_GRID_HEIGHT>
    width: IntRange<1, typeof TILE_GRID_WIDTH>
    start_at: [TileProps["width"], TileProps["height"]]
    pad_tile?: boolean
}

export const Tile: Component<TileProps> = ({
    name,
    height,
    width,
    start_at,
    pad_tile = false,
    children
}) => {
    const styles: CSSProperties = {
        backgroundColor: "#1e1e2e",
        padding: pad_tile? "0px": "10px",
        border: "3px #313244 solid",
        borderRadius: "15px",
        color: "#cdd6f4",
        gridArea: `${start_at[1]} / ${start_at[0]} / span ${height} / span ${width}`,
    }

    const animation: Variants = {
        hidden: {
            opacity: 0,
            x: 50,
            y: -100,
        },
        visible: {
            opacity: 1, 
            x: 0,
            y: 0,
            transition: {duration: 0.2}
        }
    }

    return (
        <motion.li 
            style={styles} 
            className="scrollbar thin drap-pop" 
            id={`tile--tile-${name}`}  
            variants={animation}
        >
                {children}
        </motion.li>
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
    icon
}) => {
    return (
        <Tile 
            name={name}
            start_at={start_at}
            width={1}
            height={1}
            pad_tile={true}
        >
            <div style={{
                display: "flex", 
                background: `linear-gradient(0deg, #1E1E2E90, #1E1E2E90), url(${background_image})`, 
                height: "100%", 
                width:"100%", 
                justifyContent: "center", 
                alignItems: "center", 
                gap: "10px",
                backgroundSize: "cover",
                fontWeight: "bolder"
            }}>
                <P>{title}</P>
                <Icon name={icon}/>
                
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
        gap: '10px',
        gridTemplateColumns: `repeat(${TILE_GRID_WIDTH}, 1fr)`,
        gridTemplateRows: `repeat(${TILE_GRID_HEIGHT}, 1fr)`,
        paddingLeft: "0px",
        width: "90vw",
        height: "85vh",
        paddingBottom: "5vh",
        overflow: "none"
    }

    const animation: Variants = {
        visible: {
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.ul 
            id="tile--grid" 
            style={styles}
            variants={animation}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.ul>
    )
}