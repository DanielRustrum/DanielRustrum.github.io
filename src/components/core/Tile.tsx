import { FC, ReactNode, CSSProperties } from "react"

type FunctionComponent<Props extends Object = {}, Base = {}, Exclude extends string = ""> = FC<
    keyof Props extends never?
        Base & {children?: ReactNode}:
        Props extends Base?
            Props & {children?: ReactNode}: 
            Exclude extends ""? 
                Props & Base & {children?: ReactNode}:
                Props & Omit<Base & {children?: ReactNode}, Exclude> 
>

type Component<Props extends Object = {}, Base extends Object = {}, Exclude extends string = ""> = 
    Base extends FunctionComponent<infer ComponentProp, infer ComponentBase, infer ComponentExclude> ? 
        FunctionComponent<
            keyof Props extends never? ComponentProp: Props, 
            ComponentProp & ComponentBase, 
            Exclude extends ""? ComponentExclude: Exclude
        >:
        FunctionComponent<Props, Base, Exclude>;


const TILE_GRID_WIDTH = 4
const TILE_GRID_HEIGHT = 6

interface TileProps {
    name: string
    height: number
    width: number
    start_at: [number, number]
}

const styleComponent = (styles: CSSProperties) => {
    const base_tile_styles: CSSProperties  = {
        backgroundColor: "#1e1e2e",
        padding: "10px",
        border: "2px #6c7086 solid",
        borderRadius: "15px",
        color: "#cdd6f4"
    }

    return Object.assign(styles, base_tile_styles)
}



export const BaseTile: Component<TileProps> = ({
    name,
    height,
    width,
    start_at,
    children
}) => {
    const styles = styleComponent({})

    return (
        <li style={styles} id={`tile--tile-${name}`} className="tile" >
            {children}
        </li>
    )
}


interface LinkTileProps {
    link_to: string
    background_image: string
    title: string
    icon: string
}

export const LinkTile: Component<LinkTileProps, typeof BaseTile, "height" | "width">= ({
    name,
    start_at,
    link_to,
    background_image,
    title,
    icon
}) => {
    const styles = styleComponent({})

    return (
        <li style={styles} id={`tile--tile-${name}`} className="tile" >
        </li>
    )
}



export const Tiles: Component = ({
    children
}) => {
    return (
        <ul id="tile--grid">{children}</ul>
    )
}