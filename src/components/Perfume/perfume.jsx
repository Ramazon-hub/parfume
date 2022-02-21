import "./perfume.css"
import perfume from "../../assets/imgs/register.png";

export function Perfume(){
    return(
        <div className="perfume">
        <img src={perfume} width={491} height={609} alt="img" />
        <p className="perfume-text">Sotib olmoq</p>
        <h3 className="perfume-title">Hoziroq sotib oling</h3>
      </div>
    )
}