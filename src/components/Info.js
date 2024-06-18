import mypic from "../images/Prince.jpg"

export default function Info() {
    return(
        <div className="info">
            <img className="info-image" src={mypic} alt="pic" />
            {/* <h1 className="info-name">Prince Acquah</h1>
            <h4 className="info-career">CyberSecuity</h4>
            <p className="info-site">princeacquah.website</p>
            <button className="info-email-button" type="button">Email</button>
            <button className="info-linkedin-button" type="button">LinkedIn</button> */}
        </div>
    )
}