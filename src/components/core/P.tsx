import { FC as FunctionComponent, ReactNode, CSSProperties } from "react"
type TileComponent = FunctionComponent<{
    children: ReactNode,
    style?: CSSProperties,
    className?: string
}>

export const P: TileComponent = ({
    children,
    style,
    className
}) => {
    return (
        <p style={style} tabIndex={0} className={className}>{children}</p>
    )
}