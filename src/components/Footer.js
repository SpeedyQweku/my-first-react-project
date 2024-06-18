import facebook from "../images/Facebook.png"
import github from "../images/GitHub.png"
import instagram from "../images/Instagram.png"
import twitter from "../images/Twitter.png"

export default function Footer(){
    return(
        <div className="footer_icon">
            <img src={twitter} alt="twitter" id="twit"/>
            <img src={facebook} alt="fb" id="fb"/>
            <img src={instagram} alt="ig" id="ig"/>
            <img src={github} alt="git" id="git"/>
        </div>
    )
}