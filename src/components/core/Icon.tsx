import { Component } from "../../types"

import arrow_right_icon from '../../assets/icons/arrow-right.png'
import cara_icon from '../../assets/icons/cara.png'
import codepen_icon from '../../assets/icons/codepen.png'
import dribble_icon from '../../assets/icons/dribble.png'
import github_icon from '../../assets/icons/github.png'
import instagram_icon from '../../assets/icons/instagram.png'
import journey_icon from '../../assets/icons/journey.png'
import light_icon from '../../assets/icons/light.png'
import linkedin_icon from '../../assets/icons/linkedin.png'
import mail_icon from '../../assets/icons/mail.png'
import phone_icon from '../../assets/icons/phone.png'
import pin_icon from '../../assets/icons/pin.png'
import twitch_icon from '../../assets/icons/twitch.png'
import twitter_icon from '../../assets/icons/x-twitter.png'
import youtube_icon from '../../assets/icons/youtube.png'


interface IconProps {
    name: string
    size?: "small" | "medium" | "large" | "larger" | "xlarge"
}

const image_map: {[key: string]: string} = {
    "arrow_right": arrow_right_icon,
    "cara": cara_icon,
    "codepen": codepen_icon,
    "dribble": dribble_icon,
    "github": github_icon,
    "instagram": instagram_icon,
    "journey": journey_icon,
    "light": light_icon,
    "linkedin": linkedin_icon,
    "mail": mail_icon,
    "phone": phone_icon,
    "pin": pin_icon,
    "twitch": twitch_icon,
    "twitter": twitter_icon,
    "youtube": youtube_icon,
}

export const Icon: Component<IconProps> = ({ name, size = "medium" }) => {
    const desired_size = 
        size === "small"? "14px": 
        size === "medium"? "18px": 
        size === "large"? "25px": 
        size === "larger"? "30px": 
        "35px"

    if(name in image_map) {
        return <img style={{height: desired_size}} src={image_map[name]} />
    }
    return <></>
}