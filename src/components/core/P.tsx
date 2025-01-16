import { FC as FunctionComponent, ReactNode } from "react"
type TileComponent = FunctionComponent<{
    children: ReactNode
}>

export const P: TileComponent = ({
    children
}) => {
    return (
        <p tabIndex={0}>{children}</p>
    )
}