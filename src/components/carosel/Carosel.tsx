import { CSSProperties, useState } from "react"
import { Component } from "../../types"
import { Icon } from "../core/Icon"

interface CaroselProps {
    images: Array<string>
}

export const Carosel: Component<CaroselProps> = ({
    images
}) => {
    const [current_index, setCurrentIndex] = useState(0)

    const selectImage = (index: number) => () => {
        setCurrentIndex(index)
    }

    const dot_style: CSSProperties = {
        cursor: "pointer",
        
    }

    const Dots = images.map((_, index) => {
        if(index === current_index) {
            return <div style={dot_style} className="carosel--dot-button orange" />
        }
        return <div style={dot_style} className="carosel--dot-button color-subtext" onClick={selectImage(index)}/>
    })

    const prev = () => {
        if(current_index === 0) setCurrentIndex(images.length - 1);
        else setCurrentIndex(current_index - 1);
    }

    const next = () => {
        if(current_index === images.length - 1) setCurrentIndex(0);
        else setCurrentIndex(current_index + 1);
    }

    
    
    const button_styles: CSSProperties = {
        background: "none",
        cursor: "pointer",
        border: "none"
    }

    return <div className="flex columns gap-15px pad-vert-20px v-centered">
        <img style={{
            width: "18vw",
            height: "20vh",
            objectFit: "cover",
            borderRadius: "15px"
        }} src={images[current_index]} alt="Carosel Image" />
        <div className="flex centered gap-15px v-centered">
            <button style={button_styles} onClick={prev}>
                <Icon name="prev"/>
            </button>
            <div className="flex gap-5px">
                {Dots}
            </div>
            <button style={button_styles} onClick={next}>
                <Icon name="next"/>
            </button>
        </div>
    </div>
}