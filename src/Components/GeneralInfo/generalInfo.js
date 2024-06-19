import Person from "../../data/dataGeneralInfo.json"

export default function Info(){
    
    return(
        <div className="containerInfo">
            <img src={process.env.PUBLIC_URL + "/images/photo.png"} className="photoInfo" alt="MyPhoto"></img>
            <div className="text">
                <p className="fio">{Person.fio}</p>
                <p className="infoText">{Person.age}</p>
                <p className="infoText">{Person.city}</p>
                <p className="infoText">{Person.post}</p>
                <p className="infoText univer">{Person.univer}</p>
                <p className="infoText univer">{Person.specialization}</p>

            </div>
        </div>
    )
}