import EarthIcon from "../images/earthIcon.svg"
export default function Header(){
    return(
        <div className="header">
            <img src={EarthIcon} className="earth-icon" />
            my travel journal.
        </div>
    )
}