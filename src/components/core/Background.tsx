import { FC as FunctionComponent, ReactNode, useLayoutEffect, useState } from "react"
import "./Background.scss"

type CubeComponent = FunctionComponent<{
    color1?: string
    color2?: string
    color3?: string
    size?: number
}>

type TileComponent = FunctionComponent<{
    cube_size: number
    children: ReactNode
}>

const Cube: CubeComponent = ({
    color1="rgb(17,17,27)", color2="rgb(0,191,159)", color3="rgb(191,0,178)",size=360
}) => {
    return (
        
            <g transform="matrix(1,0,0,1,-604.544,-328)">
                <g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1539.33,520.825)">
                    <path
                        d="M707.5,325L783,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-59.8376,314.779)">
                    <path
                        d="M632,495L707.5,325L707.5,328.604L707.272,328.09L633.144,495L632,495ZM707.5,494.455L707.5,495L707.043,495L707.043,494.455L707.5,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-239.654,313.776)">
                    <path
                        d="M707.5,330.152L707.5,325L783,495L780.712,495L707.5,330.152Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,-8.73099,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1398.55,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1449.11,699.426)">
                    <path
                        d="M633.831,495L632,495L632.916,492.938L633.831,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-149.517,495.175)">
                    <path
                        d="M707.081,325.944L707.5,325L707.5,326.889L707.081,325.944Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,-98.4108,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1667.96,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1449.11,700.43)">
                    <path
                        d="M632,495L707.043,326.028L707.043,328.604L633.144,495L632,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1809.2,700.43)">
                    <path
                        d="M707.5,325L783,495L781.856,495L782.307,493.984L707.5,325.545L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-149.517,495.175)">
                    <path
                        d="M707.5,326.889L707.081,325.944L707.5,325L707.5,326.889Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1667.96,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1719.06,520.825)">
                    <path
                        d="M707.5,325L783,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,119.89,314.779)">
                    <path
                        d="M707.5,325L707.5,327.576L633.144,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-60.3827,314.779)">
                    <path
                        d="M707.5,328.604L707.5,325L783,495L781.856,495L707.728,328.09L707.5,328.604ZM707.957,494.455L707.957,495L707.5,495L707.5,494.455L707.957,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,170.996,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1577.82,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1628.93,700.218)">
                    <path
                        d="M633.386,495L632,495L632.693,493.44L633.386,495ZM782.079,492.926L783,495L781.158,495L782.079,492.926ZM707.043,494.455L707.5,494.455L707.5,495L707.043,495L707.043,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-150.519,495.175)">
                    <path
                        d="M707.5,326.889L707.5,325L707.919,325.944L707.5,326.889Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,80.8602,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1487.68,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1628.93,700.218)">
                    <path
                        d="M633.386,495L632,495L632.693,493.44L633.386,495ZM782.079,492.926L783,495L781.158,495L782.079,492.926ZM707.043,495L707.043,494.455L707.5,494.455L707.5,495L707.043,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-150.519,495.175)">
                    <path
                        d="M707.919,325.944L707.5,326.889L707.5,325L707.919,325.944Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,80.8602,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1487.68,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M964,442L964,572.789L874.826,507.394L964,442Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M784,572.789L695.098,507.594L784.272,442.2L873.174,507.394L784,572.789ZM784.544,506.789L784,506.789L784,507L784.544,507L784.544,506.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M964,686.789L784,686.789L874,620.789L964,686.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M784,686.789L605,686.789L694.5,621.155L784,686.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M605,571.601L605,442L693.364,506.8L605,571.601Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                </g>
                <g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1539.33,520.825)">
                    <path
                        d="M707.5,325L783,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-59.8376,314.779)">
                    <path
                        d="M632,495L707.5,325L707.5,328.604L707.272,328.09L633.144,495L632,495ZM707.5,494.455L707.5,495L707.043,495L707.043,494.455L707.5,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-239.654,313.776)">
                    <path
                        d="M707.5,330.152L707.5,325L783,495L780.712,495L707.5,330.152Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,-8.73099,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1398.55,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1449.11,699.426)">
                    <path
                        d="M633.831,495L632,495L632.916,492.938L633.831,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-149.517,495.175)">
                    <path
                        d="M707.081,325.944L707.5,325L707.5,326.889L707.081,325.944Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,-98.4108,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1667.96,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1449.11,700.43)">
                    <path
                        d="M632,495L707.043,326.028L707.043,328.604L633.144,495L632,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1809.2,700.43)">
                    <path
                        d="M707.5,325L783,495L781.856,495L782.307,493.984L707.5,325.545L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-149.517,495.175)">
                    <path
                        d="M707.5,326.889L707.081,325.944L707.5,325L707.5,326.889Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1667.96,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1719.06,520.825)">
                    <path
                        d="M707.5,325L783,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,119.89,314.779)">
                    <path
                        d="M707.5,325L707.5,327.576L633.144,495L632,495L707.5,325Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-60.3827,314.779)">
                    <path
                        d="M707.5,328.604L707.5,325L783,495L781.856,495L707.728,328.09L707.5,328.604ZM707.957,494.455L707.957,495L707.5,495L707.5,494.455L707.957,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,170.996,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1577.82,-0.89533)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1628.93,700.218)">
                    <path
                        d="M633.386,495L632,495L632.693,493.44L633.386,495ZM782.079,492.926L783,495L781.158,495L782.079,492.926ZM707.043,494.455L707.5,494.455L707.5,495L707.043,495L707.043,494.455Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-150.519,495.175)">
                    <path
                        d="M707.5,326.889L707.5,325L707.919,325.944L707.5,326.889Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,80.8602,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1487.68,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(-1.19386,-1.46477e-16,4.76171e-17,-0.389546,1628.93,700.218)">
                    <path
                        d="M633.386,495L632,495L632.693,493.44L633.386,495ZM782.079,492.926L783,495L781.158,495L782.079,492.926ZM707.043,495L707.043,494.455L707.5,494.455L707.5,495L707.043,495Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.19386,2.91327e-16,-9.57692e-17,0.389546,-150.519,495.175)">
                    <path
                        d="M707.919,325.944L707.5,326.889L707.5,325L707.919,325.944Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.01277,1.38065e-18,1.37809e-18,1.00338,80.8602,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color2 }}
                    />
                    </g>
                    <g transform="matrix(-1.01277,-1.38065e-18,1.37809e-18,1.00338,1487.68,178.497)">
                    <path
                        d="M783.544,327.789L783.544,441.789L694.544,507.789L694.544,393.789L783.544,327.789Z"
                        style={{ fill: color3 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M964,442L964,572.789L874.826,507.394L964,442Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M784,572.789L695.098,507.594L784.272,442.2L873.174,507.394L784,572.789ZM784.544,506.789L784,506.789L784,507L784.544,507L784.544,506.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M964,686.789L784,686.789L874,620.789L964,686.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M784,686.789L605,686.789L694.5,621.155L784,686.789Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                    <g transform="matrix(1.00151,0,0,1.00338,-0.91531,-1.10748)">
                    <path
                        d="M605,571.601L605,442L693.364,506.8L605,571.601Z"
                        style={{ fill: color1 }}
                    />
                    </g>
                </g>
            </g>
    )
}

const useWindowSteps = (): [number, number] => {
    const [steps, setStep] = useState<[number, number]>([0, 0]);
    useLayoutEffect(() => {
        const updateSize = () => {
            setStep([
                window.innerWidth,
                window.innerHeight
            ]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return steps
}

export const Background: TileComponent = ({
    cube_size = 360,
    children
}) => {
    const [window_width, window_height] = useWindowSteps()

    // let width_array = Array.from(Array(width_step+1), (_, index) => <Cube 
    //     key={index} 
    //     size={cube_size}
    //     color1="#1e1e2e"
    //     color2="#181825"
    //     color3="#11111b"
    // />);
    // let height_array = Array.from(Array(height_step+1), (_, index) => <div key={index} className="flex app--background--row">{width_array}</div>);
    const tile = (
        <svg
            width={`${window_width}px`}
            height={`${window_height}px`}
            viewBox={`0 0 ${window_width} ${window_height}`}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2
            }}
        >
            <defs>
                <pattern id="pattern" viewBox={`0 0 ${cube_size} ${cube_size}`} width="2%" height="2%">
                    <Cube />
                </pattern>
            </defs>

            <rect x="0" width={`${window_width}px`} height={`${window_height}px`} fill="#pattern" />
        </svg>
    )
    return (
        <div id="app--container">
            {children}
            <div id="app--background" className="" aria-hidden={true}>{tile}</div>
        </div>
    )
}